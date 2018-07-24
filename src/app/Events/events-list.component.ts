import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html',
    styles: [`
     .thumbnail { min-height: 210px; }
     .pad-left {margin-left: 10px; }
     .well div {color: #bbb; }
    `]
})
export class EventsListComponent {
    events = [{
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
        id: 1,
        name: 'Medalla',
        date: '9/26/2018',
        cost: 800,
        price: 1600,
        imageUrl:'/assets/images/ring.jpg',
        specifications: {
            weight : 3,
            kilatage: 14,
            metal: 'Oro'
        }
    },{
        id: 1,
        name: 'Huggies',
        date: '9/26/2018',
        cost: 400,
        price: 1800,
        imageUrl:'/assets/images/ring.jpg',
        specifications: {
            weight : 2.2,
            kilatage: 14,
            metal: 'Florentino'
        }
    }
    ]
}