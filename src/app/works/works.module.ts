import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkService } from './work.service';

import { WorkListComponent } from './work-list.component';
import { WorkDetailComponent } from './work-detail.component';
import { WorkRoutingModule } from "./works-routing.module";
import {SharedModule} from "../shared/shared.module";
import {NoDataComponent} from "./no-data.component";
import {PanelComponent} from "./panel.component";

@NgModule({
  declarations: [
    WorkListComponent,
    WorkDetailComponent,
    NoDataComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    SharedModule
  ],
  providers: [
    WorkService
  ]
})
export class WorkModule {}
