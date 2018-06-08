import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EventListComponent} from './events/eventlist.component';
import { EventThumbnailComponent } from './events/eventthumbnails.component';
import { EventService } from './shared/eventservice.component';
import { NavBarComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './shared/route';
import { EventDetailsComponent } from './events/eventdetails.component';
import { Error404Component } from './error/error.component';
import { EventRouteActivator } from './shared/eventrouteactivator.service';

@NgModule({
  declarations: [
    AppComponent,EventListComponent,
    EventThumbnailComponent,NavBarComponent,
    EventDetailsComponent,Error404Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [EventService,EventRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
