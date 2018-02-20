import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DatabaseComponent} from "./database/database.component";
import {HomeComponent} from "./home/home.component";
import {FormsComponent} from "./forms/forms.component";
import {OrderServiceCreateComponent} from "./orderService/create/orderService.create.component";



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FormsComponent } ,
  { path: 'database', component: DatabaseComponent },
  { path: 'oscreate', component: OrderServiceCreateComponent }
  
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
