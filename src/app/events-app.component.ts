import { Component } from '@angular/core';

@Component({
  selector: 'events-apps',
  template: `
            <nav-bar></nav-bar>
            <events-list></events-list>
  `,
  
})
export class EventsAppComponent {
  title = 'app';
}
