import { Component } from "@angular/core";

@Component({
    templateUrl:'./eventdatails.html'

})
export class EventDetailsComponent
{
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: './app/assets/images/angularconnect-shield.png',
        location: {
         address: '1057 DT',
         city: 'London',
         country: 'England'
        }
    }
}