import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:`
        <div class="well hoverwell thumbnail">
                <h2>{{ event.name }}</h2>
                <div>Date:{{event.date}}</div>
                <div>Time:{{event.time}}</div>
                <div>Price:{{event.price}}</div>
                <div>
                    <span>Location:{{event.location.address}}</span>
                    <span>{{event.location.city}},{{event.location.country}}</span>
                </div>
        </div>
        <div>
            <button (click)="generateEvent()">Click Me</button>
        </div>
    
    `
})
export class EventThumbnailComponent{
    @Input() event:any

    @Output() eventClick=new EventEmitter()


    generateEvent(){
        this.eventClick.emit("somedata")
    }

    logData(){
        console.log("logging the data...")
    }


}