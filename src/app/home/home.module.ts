import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HomeSectionComponent} from "./section/home-section.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
@NgModule({
  declarations: [
    HomeComponent,
    HomeSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule {}
