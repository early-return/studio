import {Component} from "@angular/core";
import {StateService} from "../service/state.service";
@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.html']
})
export class HomeComponent {

  constructor(
    public stateService: StateService
  ) {
    stateService.state = 'home';
  }

}
