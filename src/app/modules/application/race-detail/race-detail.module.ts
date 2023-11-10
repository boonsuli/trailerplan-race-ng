import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceDetailRoutingModule } from './race-detail-routing.module';
import { RaceDetailComponent } from './race-detail.component';


@NgModule({
  declarations: [
    RaceDetailComponent
  ],
  imports: [
    CommonModule,
    RaceDetailRoutingModule
  ]
})
export class RaceDetailModule { }
