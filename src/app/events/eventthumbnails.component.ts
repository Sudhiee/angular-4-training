import {Component, Input, Output} from '@angular/core'
import {EventEmitter} from '@angular/core'  

@Component({
    selector: 'event-thumbnail',
    templateUrl:'./eventlist.html',
    styleUrls: ['../app.component.css']
    }

)
export class EventThumbnailComponent{
    @Input() event:any

    @Output() eventClick = new EventEmitter()

    generateEvent(){
        this.eventClick.emit("Some Data")
    }

    getLogData()
    {
        console.log("In getLogData() method of eventThumbnail")
    }
}