import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {WorkModule} from "./works/works.module";
import {AboutComponent} from "./about/about.component";
import {Logger} from "./common/service/logger.service";
import {StateService} from "./common/service/state.service";
import {HomeModule} from "./home/home.module";
import {PanelComponent} from "./common/components/panel.component";
import {CommonUtilModule} from "./common/common-util.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUtilModule,
    AppRoutingModule,
    WorkModule,
    HomeModule
  ],
  providers: [
    StateService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
