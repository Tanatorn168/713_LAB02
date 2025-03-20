export interface Event {
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
        title: 'Concert',
        description: 'Live concert of a famous band',
        location: 'Stadium',
        date: '2022-02-05',
        time: '20:00',
        petsAllowed: false,
        organizer: 'Music Company'
    },
    {
        id: 2,
        category: 'Sport',
        title: 'Football Match',
        description: 'Local football match',
        location: 'Stadium',
        date: '2022-02-06',
        time: '15:00',
        petsAllowed: false,
        organizer: 'Football Club'
    },
    {
        id: 3,
        category: 'Conference',
        title: 'Tech Conference',
        description: 'Conference on latest technology trends',
        location: 'Convention Center',
        date: '2022-02-07',
        time: '09:00',
        petsAllowed: false,
        organizer: 'Tech Company'
    },
    {
        id: 4,
        category: 'Food',
        title: 'Food Festival',
        description: 'Festival showcasing local cuisines',
        location: 'Park',
        date: '2022-02-08',
        time: '12:00',
        petsAllowed: true,
        organizer: 'Food Association'
    },
    {
        id: 5,
        category: 'Film',
        title: 'Film Screening',
        description: 'Screening of an independent film',
        location: 'Movie Theater',
        date: '2022-02-08',
        time: '18:00',
        petsAllowed: false,
        organizer: 'Film Society'
    },
    {
        id: 6,
        category: 'Literature',
        title: 'Book Fair',
        description: 'Annual book fair with various authors',
        location: 'Library',
        date: '2022-02-09',
        time: '10:00',
        petsAllowed: true,
        organizer: 'Book Club'
    }
];

//export function getEventByCategory (category: string) : Event[] {
export function getEventByCategory (category: string) : Promise<Event[]> {
    const filteredEvents = events.filter((event) => event.category === category);
    //return filteredEvents;
    return Promise.resolve(events);
}

//export function getAllEvents () : Event[] {
    //return events;
//}
export function getAllEvents () : Promise<Event[]> {
    return Promise.resolve(events);
}

//export function getEventById (id: number) : Event | undefined {
    //return events.find((event) => event.id === id);
//}

export function getEventById(id: number): Promise<Event | undefined> {
    return Promise.resolve(events.find((event) => event.id === id));
}


//export function addEvent (newEvent: Event) : Event {
    export function addEvent(newEvent: Event): Promise<Event> {
    newEvent.id = events.length + 1;
    events.push(newEvent);
    //return newEvent;
    return Promise.resolve(newEvent);
}