import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { salesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SaleDetailsComponent } from './sale-details/sale-details.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    SalesComponent,
    SaleDetailsComponent
  ],
  imports: [
    CommonModule,
    salesRoutingModule,
    HttpClientModule
  ]
})
export class SalesModule { }
