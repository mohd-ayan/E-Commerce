import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule,Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MatCardModule} from '@angular/material/card';

const routes:Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:HomeComponent
    },
    {
        path:'contact',
        component:HomeComponent
    }
]

@NgModule({
    declarations:[
        HomeComponent,
        AboutComponent,
        ContactComponent,
        // MatCardModule
    ],
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        // RouterModule,
        // MatCardModule
    ]
})
export class HomeModule {    }