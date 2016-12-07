import {Component, Input} from "@angular/core";

@Component({
  selector: 'panel',
  templateUrl: 'panel.component.html',
  styleUrls: ['panel.component.css']
})
export class PanelComponent {
  @Input() title: string;
  @Input() iconClass: string;
  @Input() content: string;
  @Input() button: string;
  @Input() buttonClick: any;
}
