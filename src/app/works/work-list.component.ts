import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {WorkService} from "./work.service";
import {Work} from "./work";
import {Observable} from "rxjs";
import {StateService} from "../common/service/state.service";

@Component({
  selector: 'work-list',
  templateUrl: 'work-list.component.html',
  styleUrls: ['work-list.component.css']
})
export class WorkListComponent implements OnInit{
  works: Work[];

  constructor(
    public stateService: StateService,
    private router: Router,
    private service: WorkService
  ) {
    stateService.state = 'work-list';
    stateService.title = '作品列表'
  }

  ngOnInit() {
    this.service.getWorks()
      .then(works => this.works = works);
  }

  onSelect(work: Work) {
    this.router.navigate(['/work', work.id]);
  }
}
