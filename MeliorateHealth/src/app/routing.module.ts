import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then(m=> m.HomeModule)
  },
  {
    path:'products',
    loadChildren:()=> import('./products/products.module').then(m=> m.ProductsModule)
  },
  {
    path:'career',
    loadChildren:()=> import('./career/career.module').then(m=> m.CareerModule)
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
