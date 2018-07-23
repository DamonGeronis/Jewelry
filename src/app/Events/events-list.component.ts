import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
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
            metal: 'Oro'
        }
    }
}