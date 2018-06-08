import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {EventListComponent,EventThumbnailComponent, EventDetailsComponent} from './events/index';

import { EventService,EventRouteActivator,appRoutes } from './shared/index';

import { NavBarComponent } from './nav/nav.component';

import { RouterModule } from '@angular/router';

import { Error404Component } from './error/error.component';

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
