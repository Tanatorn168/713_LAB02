import express, { Request, Response } from 'express';
import { getAllEvents, getEventByCategory, addEvent } from "./services/EventService";
import type { Event } from "./model/Event";
import { getEventById } from "./repository/EventRepository";
import add from "./function";
import multer from 'multer';
import { uploadFile } from './services/UploadFileService';

const app = express();
app.use(express.json());
const port = 3000;

//app.get("/events", (req, res) => {
app.get("/events", async(req, res) => {
    if (req.query.category) {
        const category = req.query.category;
        //const filteredEvents = events.filter((event) => event.category === category);
        //const filteredEvents = getEventByCategory(category as string);
        const filteredEvents = await getEventByCategory(category as string);
        res.json(filteredEvents);
    } 
    else {
        //res.json(events);
        //res.json(getAllEvents());
        res.json(await getAllEvents());
    }
});

app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    //const event = events.find((event) => event.id === id);
    const event = getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

//เพิ่มฐานข้อมูล
//app.post("/events", (req, res) => {
//    console.log(req.body);
//app.post("/events", (req, res) => {
app.post("/events", async (req, res) => {       
    const newEvent: Event = req.body;
    //newEvent.id = events.length + 1;
    //events.push(newEvent);
    //addEvent(newEvent);
   await addEvent(newEvent);
    res.json(newEvent);
});

const upload = multer ({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req: any, res: any) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }
        const bucket = 'images';
        const filePath = `uploads/${file.originalname}`;

        await uploadFile(bucket, filePath, file);

        res.status(200).send('File uploaded successfully.');
    }
    catch (error) {
        res.status(500).send('Error uploading file.');
    }
});