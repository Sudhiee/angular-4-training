import {Component} from '@angular/core'

@Component({
    selector:'event-list',
  /*  templateUrl:'./eventlist.html'*/
    template:`
        <div>
            <h1>Upcoming Angular Events</h1>
            <event-thumbnail #thumbnail [event]="event" (eventClick)="takeData($event)"></event-thumbnail>
        </div>
       
       <div>
            <button (click)="thumbnail.logData()">Hit Me</button>
       </div>
    
    `,
    styles:[`
        h1{color:red}
    `]
})
export class EventListComponent{
    
    event={
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

    takeData(data){
        console.log("data received from inner component is "+data)
    }

}