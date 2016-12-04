import {Component} from "@angular/core";
import {StateService} from "../service/state.service";
@Component({
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {

  constructor(
    public stateService: StateService
  ) {
    stateService.state = 'about';
    console.log(JSON.stringify(stateService.state));
  }
}
