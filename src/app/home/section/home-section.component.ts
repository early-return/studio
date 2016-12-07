import { Component } from '@angular/core'
import {StateService} from "../../shared/service/state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'home-section',
  templateUrl: 'home-section.component.html',
  styleUrls: ['home-section.component.css']
})
export class HomeSectionComponent {

  constructor(
    private router: Router
  ) {}

  onClickWorks() {
    this.router.navigate(['/works']);
  }
}
