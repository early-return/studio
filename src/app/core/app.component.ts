import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StateService} from "../shared/service/state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public stateService: StateService,
    private route: ActivatedRoute
  ) {}

}
