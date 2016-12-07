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
    PanelComponent,
    IconPipe,
    IconComponent
  ],
  exports: [
    PanelComponent,
    IconPipe
  ]
})
export class SharedModule {}
