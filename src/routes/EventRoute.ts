import express from 'express';
import { getAllEvents, getEventById, getEventByCategory, addEvent } from '../repository/EventRepository';

const router = express.Router();

// Route to get all events or filter by category
router.get("/", async(req, res) => {
    const category = req.query.category as string | undefined;
    if (category) {
        const filteredEvents = await getEventByCategory(category);
        res.json(filteredEvents);
    } else {
        const events = await getAllEvents();
        res.json(events);
    }
});

// Route to get an event by ID
router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const event = await getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Event not found');
    }
});

// Route to add a new event
router.post("/", async (req, res) => {
    const newEvent = req.body;
    const addedEvent = await addEvent(newEvent);
    res.status(201).json(addedEvent);
});

export default router;