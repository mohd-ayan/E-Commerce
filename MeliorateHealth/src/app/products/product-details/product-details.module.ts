import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

const routes:Routes = [
    {
        path:'product_details',
        component:ProductDetailsComponent
    }
]

@NgModule({
    declarations:[
        ProductDetailsComponent
    ],
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule
    ]
})
export class ProductDetailsModule {    }