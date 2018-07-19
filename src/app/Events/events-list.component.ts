import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template:`
                <div>
                    <h1>Upcoming Angular Events</h1>
                    <hr>
                    <h2>{{event.name}}</h2>
                </div>
              `
})
export class EventsListComponent{
    event = {
        id: 1,
        name: 'Anillo',
        date: '9/26/2018',
        cost: 600,
        price: 1200,
        imageUrl:'/assets/images/ring.jpg',
        specifications: {
            weight : 1.2,
            kilatage: 14,
            Metal: 'Gold'
        }
    }
}