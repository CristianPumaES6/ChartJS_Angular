import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reporte1Component } from './reporte1/reporte1.component';
import { Report2Component } from './report2/report2.component';

@NgModule({
  declarations: [
    AppComponent,
    Reporte1Component,
    Report2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
