import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reporte1Component } from './reporte1/reporte1.component';

const routes: Routes = [
  { path: 'report1', component: Reporte1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
