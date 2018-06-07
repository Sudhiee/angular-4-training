import { Component } from "@angular/core";
import { EventService } from "../shared/eventservice.component";

@Component({
    selector: 'event-list',
    template: ` <h1>Upcoming Angular Events</h1>
                    <span *ngFor="let event of events ">
                        <event-thumbnail #thumbnail [event]="event" (eventClick)="takeDataFromThumbnail($event)">
                        </event-thumbnail>
                    </span>
                    <!--
                    <div>
                    <button (click)="thumbnail.getLogData()"> GetLogData </button>
                    </div>
                    -->
                `,
})

export class EventListComponent
{
    events:any[]

    constructor(private eventService:EventService){
        this.events = eventService.getEvents();
    }
}