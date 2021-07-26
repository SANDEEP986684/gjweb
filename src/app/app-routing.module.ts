import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
 
const routes : Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path :'home', component:HomeComponent},
  {path :'header', component:HeaderComponent},
  {path :'sidebar', component:SidebarComponent},
  {path :'dashboard', component:DashboardComponent}
]


@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class AppRoutingModule { }
