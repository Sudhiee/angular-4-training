import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EventListComponent} from './events/eventlist.component'
import {EventThumbnailComponent} from './events/eventthumbnail.component'

@NgModule({
  declarations: [
    AppComponent,EventListComponent,EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
