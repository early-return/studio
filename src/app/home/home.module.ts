import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HomeSectionComponent} from "./section/home-section.component";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [
    HomeComponent,
    HomeSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {}
