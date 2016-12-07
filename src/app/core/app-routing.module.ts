import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found.component';
import {AboutComponent} from "../about/about.component";

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
