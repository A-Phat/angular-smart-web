import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from '../app/app-bootstrap/app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebtPlannerModule } from './debt-planner/debt-planner.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    DebtPlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
