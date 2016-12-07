import {Component, OnInit, HostBinding, style, state, animate, transition, trigger} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {WorkService} from "./work.service";
import {Work} from "./work";

import 'rxjs/add/operator/switchMap';
import {Logger} from "../shared/service/logger.service";
import {StateService} from "../shared/service/state.service";

@Component({
  selector: 'work-detail',
  templateUrl: 'work-detail.component.html',
  styleUrls: ['work-detail.component.css']
})
export class WorkDetailComponent implements OnInit{
  work: Work;

  constructor(
    public stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
    private service: WorkService,
    private log: Logger
  ) {
    stateService.state = 'work-detail';
    stateService.title = '作品详情'
  }

  gotoWorks() {
    this.router.navigate(['/works']);
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.service.getWork(+params['id']))
      .subscribe((work: Work) => {
        this.work = work;
        this.log.d(JSON.stringify(work));
      });
  }
}
