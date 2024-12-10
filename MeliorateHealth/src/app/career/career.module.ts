import { NgModule } from '@angular/core';
import { CareerComponent } from './career.component';
import { RouterModule,Routes} from '@angular/router';

const routes:Routes = [
    {
        path:'career',
        component:CareerComponent
    }
]

@NgModule({
    declarations:[
        CareerComponent
    ],
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule
    ]
})
export class CareerModule {    }