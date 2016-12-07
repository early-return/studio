import {Component, Input} from "@angular/core";
@Component({
  selector: 'icon',
  template: `<span [class]="iconClass"></span>`
})
export class IconComponent {
  @Input() iconClass: string;
}
