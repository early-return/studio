import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {WorkListComponent} from "./work-list.component";
import {WorkDetailComponent} from "./work-detail.component";

const worksRoutes: Routes = [
  {path: 'work/:id', component: WorkDetailComponent},
  {path: 'works', component: WorkListComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(worksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkRoutingModule {}
