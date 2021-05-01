import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebtPlannerRoutingModule } from './debt-planner-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DebtCalculationComponent } from './containers/debt-calculation/debt-calculation.component';
import { HeadersComponent } from './components/headers/headers.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DebtCalculationComponent,
    HeadersComponent
  ],
  imports: [
    CommonModule,
    DebtPlannerRoutingModule
  ]
})
export class DebtPlannerModule { }
