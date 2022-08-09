import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { ServiceListComponent } from './components/service-list/service-list.component';

const routes: Routes = [
  {path:'', component:ServiceListComponent, pathMatch:'full'},
  {path:'services',component:ServiceListComponent},
  {path:'service/add',component:ServiceFormComponent},
  {path:'service/:id',component:ServiceFormComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }