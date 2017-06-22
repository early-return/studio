import {NgModule} from "@angular/core";
import {PanelComponent} from "./components/panel.component";
import {CommonModule} from "@angular/common";
import {IconPipe} from "./pipe/icon.pipe";
import {IconComponent} from "./components/icon.component";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconPipe,
    IconComponent,
    PanelComponent
  ],
  exports: [
    IconPipe,
    PanelComponent
  ]
})
export class SharedModule {}
