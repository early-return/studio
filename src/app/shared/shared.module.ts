import {NgModule} from "@angular/core";
import {PanelComponent} from "./components/panel.component";
import {CommonModule} from "@angular/common";
import {IconPipe} from "./pipe/icon.pipe";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PanelComponent,
    IconPipe
  ],
  exports: [
    PanelComponent,
    IconPipe
  ]
})
export class SharedModule {}
