import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { RouterModule,Routes} from '@angular/router';
import { ProductDetailsModule } from './product-details/product-details.module';
import { RoutingModule } from '../routing.module';

const routes:Routes = [
    {
        path:'products',
        component:ProductsComponent
    }
]

@NgModule({
    declarations:[
        ProductsComponent
    ],
    imports:[
        RouterModule.forChild(routes),
        ProductDetailsModule
    ]
})
export class ProductsModule {    }