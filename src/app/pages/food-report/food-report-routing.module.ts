import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodReportPage } from './food-report.page';

const routes: Routes = [
  {
    path: '',
    component: FoodReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodReportPageRoutingModule {}
