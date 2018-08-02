import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './Events/events-list.component';
import { NavbarComponent } from './Navigation/navbar.component';
import { EventService } from './Events/Shared/event.services';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
