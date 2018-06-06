import {Component, Input, Output} from '@angular/core'
import {EventEmitter} from '@angular/core'  

@Component({
    selector: 'event-thumbnail',
    templateUrl:'./eventlist.html',
   /* styles:[
        `.event-box
        {
            margin: 10px;
            border-style: solid;
            border-radius: 20px;
            padding : 20px;
            width: max-content;
        }`]*/
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