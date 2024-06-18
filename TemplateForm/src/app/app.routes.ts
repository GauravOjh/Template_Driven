import { Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: 'home', component: HomeComponent,},
    {path:'template',component:TemplateComponent}
];
