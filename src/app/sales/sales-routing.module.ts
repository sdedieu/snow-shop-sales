import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleDetailsComponent } from './sale-details/sale-details.component';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path: 'sales', component: SalesComponent },
  { path: 'sales/:saleId', component: SaleDetailsComponent },
{ path: '', redirectTo: 'sales', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class salesRoutingModule { }
