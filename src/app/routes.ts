import {Routes} from '@angular/router';
import { EventsListComponent } from './Events/events-list.component';
import { EventDetailsComponent } from './Events/Events-Details/events-details.component';

export const appRoutes:Routes = [
    {path: 'events', component:EventsListComponent},
    {path: 'events/:id', component:EventDetailsComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]