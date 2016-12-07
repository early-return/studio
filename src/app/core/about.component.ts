import {Component} from "@angular/core";
import {StateService} from "../shared/service/state.service";
@Component({
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  constructor(
    public stateService: StateService
  ) {
    stateService.state = 'about';
    stateService.title = '关于'
  }
}
