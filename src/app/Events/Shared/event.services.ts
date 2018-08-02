import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
    getEvents() {
        return EVENTS;
    }
    getEvent(id: number) {
        return EVENTS.find(event => event.id === id);
    }
}
const EVENTS = [{
    id: 1,
    name: 'Anillo',
    date: '9/26/2018',
    cost: 600,
    price: 1200,
    imageUrl: '/assets/images/ring.jpg',
    specifications: {
        weight: 1.2,
        kilatage: 14,
        metal: 'Oro'
    }
},
{
    id: 2,
    name: 'Medalla',
    date: '9/26/2018',
    cost: 800,
    price: 1600,
    imageUrl: '/assets/images/ring.jpg',
    specifications: {
        weight: 3,
        kilatage: 14,
        metal: 'Oro'
    }
}, {
    id: 3,
    name: 'Huggies',
    date: '9/26/2018',
    cost: 400,
    price: 1800,
    imageUrl: '/assets/images/ring.jpg',
    specifications: {
        weight: 2.2,
        kilatage: 14,
        metal: 'Florentino'
    }
}
];