import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleDetailsComponent } from './sale-details/sale-details.component';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path: 'items', component: SalesComponent },
  { path: 'items/:saleId', component: SaleDetailsComponent },
  { path: 'sales', redirectTo: 'items', pathMatch: 'full' },
  { path: '', redirectTo: 'items', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class salesRoutingModule { }
