import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reporte1Component } from './reporte1/reporte1.component';
import { Report2Component } from './report2/report2.component';

const routes: Routes = [
  { path: 'report1', component: Reporte1Component },
  { path: 'report2', component: Report2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
