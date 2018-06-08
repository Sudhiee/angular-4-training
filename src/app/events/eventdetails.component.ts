import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/eventservice.component";

@Component({
    templateUrl:'./eventdatails.html'

})
export class EventDetailsComponent
{
    event:any

    constructor(private route:ActivatedRoute,private eventService:EventService){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}