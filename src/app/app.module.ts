import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './Events/events-list.component';
import { NavbarComponent } from './Navigation/navbar.component';
import { EventService } from './Events/Shared/event.services';
import { EventDetailsComponent } from './Events/Events-Details/events-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
