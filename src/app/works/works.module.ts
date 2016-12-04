import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkService } from './work.service';

import { WorkListComponent } from './work-list.component';
import { WorkDetailComponent } from './work-detail.component';
import { WorkRoutingModule } from "./works-routing.module";

@NgModule({
  declarations: [
    WorkListComponent,
    WorkDetailComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ],
  providers: [
    WorkService
  ]
})
export class WorkModule {}

