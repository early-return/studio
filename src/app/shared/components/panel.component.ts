import {Component, Input} from "@angular/core";
import {Panel} from "./panel";

@Component({
  selector: 'panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.css']
})
export class PanelComponent {
  @Input() panel: Panel;
}
