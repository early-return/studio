import {Component} from "@angular/core";
import {StateService} from "../shared/service/state.service";
import {Router} from "@angular/router";
@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {

  constructor(
    public stateService: StateService,
    private router: Router
  ) {
    stateService.state = 'home';
    stateService.title = 'home'
  }

  onClickWorks() {
    this.router.navigate(['/works']);
  }

  onClickAbout() {
    this.router.navigate(['/about']);
  }

}
