import { Component } from "@angular/core";

@Component({
    selector: 'event-list',
    template: `<event-thumbnail #thumbnail [event]="event" (eventClick)="takeDataFromThumbnail($event)">
                </event-thumbnail>
                <div>
                    <button (click)="thumbnail.getLogData()"> GetLogData </button>
                </div>

                `,
})

export class EventListComponent
{
    event = {
        id:1,
        name:'Angular Connect',
        date:'01/01/2019',
        time:'10:00 am',
        price:456,
        imgSource:'favicon.ico',
        location:{
            address:'1057 DT',
            city:'Mumbai',
            country:'India'
        }
    }

    takeDataFromThumbnail(data) {
        console.log("Data from eventThumbnail"+data)
    }
}