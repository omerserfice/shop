import { Routes } from '@angular/router';
import { ProductComponent } from './product/product';
import { ProductAddForms1 } from './product/product-add-forms1/product-add-forms1';

export const routes: Routes = [
     
    {path:'products',component:ProductComponent},
    {path:'product-add-1',component:ProductAddForms1},
    {path:'product-add-2',component:ProductComponent},
    {path:'',redirectTo : 'products',pathMatch:'full'},
    {path:'products/category/:categoryId',component:ProductComponent}

];
