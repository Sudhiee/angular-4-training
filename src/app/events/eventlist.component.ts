import { Component } from "@angular/core";

@Component({
    selector: 'event-list',
    template : `
            <div> Event details
                <div>event.name</div>
                <div>event.date</div>
                <div>event.time</div>
                <div>event.price</div>
                <div>event.location</div> 
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
        location:{
            address:'1057 DT',
            city:'Mumbai',
            country:'India'
        }
    }
}