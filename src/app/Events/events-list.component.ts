import { Component, OnInit } from "@angular/core";
import { EventService } from "./Shared/event.services";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html',
    styles: [`
     .thumbnail { min-height: 210px; }
     .pad-left {margin-left: 10px; }
     .well div {color: #bbb; }
    `]
})
export class EventsListComponent implements OnInit{
    events:any[];


    constructor(private eventService: EventService){
        
    }

    ngOnInit(){
        this.events = this.eventService.getEvents();
    }
}