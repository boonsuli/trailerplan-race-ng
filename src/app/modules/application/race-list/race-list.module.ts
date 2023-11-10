import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceListRoutingModule } from './race-list-routing.module';
import { RaceListComponent } from './race-list.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    RaceListComponent
  ],
  imports: [
    CommonModule,
    RaceListRoutingModule,
    MatTableModule
  ]
})
export class RaceListModule { }
