import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { salesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SaleDetailsComponent } from './sale-details/sale-details.component';


@NgModule({
  declarations: [
    SalesComponent,
    SaleDetailsComponent
  ],
  imports: [
    CommonModule,
    salesRoutingModule
  ]
})
export class SalesModule { }
