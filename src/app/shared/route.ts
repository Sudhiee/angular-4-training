import {Routes} from '@angular/router'
import { EventListComponent } from '../events/eventlist.component';
import { EventDetailsComponent } from '../events/eventdetails.component';
import { EventThumbnailComponent } from '../events/eventthumbnails.component';

export const appRoutes:Routes=[

    {path:'events',component:EventListComponent},
    {path:'events/1',component:EventDetailsComponent},
    {path:'',redirectTo:'events',pathMatch:'full'}
]