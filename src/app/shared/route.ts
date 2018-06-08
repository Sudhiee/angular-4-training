import {Routes} from '@angular/router'
import { EventListComponent } from '../events/eventlist.component';
import { EventDetailsComponent } from '../events/eventdetails.component';
import { EventThumbnailComponent } from '../events/eventthumbnails.component';
import { Error404Component } from '../error/error.component';
import { EventRouteActivator } from './eventrouteactivator.service';
import { CreateEventComponent } from '../events/createevent.component';

export const appRoutes:Routes=[

    {path:'events',component:EventListComponent},
    {path:'events/new',component:CreateEventComponent},
    {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'events',pathMatch:'full'},
    {path:'**',redirectTo:'404',pathMatch:'full'}
]