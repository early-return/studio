import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './core/app-routing.module';

import { AppComponent } from './core/app.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import {WorkModule} from "./works/works.module";
import {AboutComponent} from "./core/about.component";
import {Logger} from "./shared/service/logger.service";
import {StateService} from "./shared/service/state.service";
import {HomeModule} from "./home/home.module";
import {PanelComponent} from "./shared/components/panel.component";
import {SharedModule} from "./shared/shared.module";
import {IconPipe} from "./shared/pipe/icon.pipe";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    WorkModule,
    HomeModule,
    CoreModule
  ],
  providers: [
    StateService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
