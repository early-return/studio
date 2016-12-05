import {NgModule} from "@angular/core";
import {PanelComponent} from "./components/panel.component";
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PanelComponent
  ],
  exports: [
    PanelComponent
  ]
})
export class CommonUtilModule {}
