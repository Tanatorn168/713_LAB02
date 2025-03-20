import express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})

interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
}

const events: Event[] = [
    {
        id: 1,
        category: 'Music',
        title: 'Music Festival',
        description: 'Music festival with live bands',
        location: 'Central Park',
        date: '2022-02-01',
        time: '12:00',
        petsAllowed: false,
        organizer: 'Live Nation'
    },
    {
        id: 2,
        category: 'Sport',
        title: 'Football Match',
        description: 'Football match between two teams',
        location: 'Stadium',
        date: '2022-02-02',
        time: '15:00',
        petsAllowed: false,
        organizer: 'FIFA'
    },
    {
        id: 3,
        category: 'Food',
        title: 'Food Festival',
        description: 'Food festival with various food stalls',
        location: 'Central Park',
        date: '2022-02-03',
        time: '12:00',
        petsAllowed: true,
        organizer: 'Food Network'
    },
    {
        id: 4,
        category: 'Art',
        title: 'Art Exhibition',
        description: 'Exhibition of modern art',
        location: 'Art Gallery',
        date: '2022-02-04',
        time: '10:00',
        petsAllowed: false,
        organizer: 'Art World'
    },
    {
        id: 5,
        category: 'Technology',
        title: 'Tech Conference',
        description: 'Conference on the latest in technology',
        location: 'Convention Center',
        date: '2022-02-05',
        time: '09:00',
        petsAllowed: false,
        organizer: 'Tech Innovators'
    },
    {
        id: 6,
        category: 'Health',
        title: 'Yoga Class',
        description: 'Morning yoga class in the park',
        location: 'Central Park',
        date: '2022-02-06',
        time: '07:00',
        petsAllowed: true,
        organizer: 'Yoga Studio'
    },
    {
        id: 7,
        category: 'Education',
        title: 'Coding Workshop',
        description: 'Workshop on web development',
        location: 'Tech Hub',
        date: '2022-02-07',
        time: '14:00',
        petsAllowed: false,
        organizer: 'Code Academy'
    },
    {
        id: 8,
        category: 'Film',
        title: 'Film Screening',
        description: 'Screening of an independent film',
        location: 'Movie Theater',
        date: '2022-02-08',
        time: '18:00',
        petsAllowed: false,
        organizer: 'Film Society'
    }
];

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.get("/events", (req, res) => {
    if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = events.filter((event) => event.category === category);
    res.json(filteredEvents);
    } else {
    res.json(events);
    }
});

app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const event = events.find((event) => event.id === id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});
  