import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodReportPageRoutingModule } from './food-report-routing.module';

import { FoodReportPage } from './food-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodReportPageRoutingModule
  ],
  declarations: [FoodReportPage]
})
export class FoodReportPageModule {}
