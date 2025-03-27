import type { Event } from "../model/Event";
//import { getAllEvents as allEvents ,getEventById as eventById,addEvent as addNewEvent } from "../repository/EventRepository";
//import *as repo from "../repository/EventRepository";
import * as repo from "../repository/EventREpositoryDb";

export function getEventByCategory(category: string): Promise<Event[]> { 
    //return getEventByCategory(category);
    return repo.getEventByCategory(category);
    }
    
export function getAllEvents(): Promise<Event[]> {
    //return allEvents();
    return repo.getAllEvents();
    }

export function addEvent(newEvent: Event): Promise<Event> {
    //return addNewEvent(newEvent);
    return repo.addEvent(newEvent);
    }
        