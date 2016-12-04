import {Component, OnInit, HostBinding, style, state, animate, transition, trigger} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {WorkService} from "./work.service";
import {Work} from "./work";

import 'rxjs/add/operator/switchMap';
import {Logger} from "../service/logger.service";
import {StateService} from "../service/state.service";

@Component({
  selector: 'work-detail',
  templateUrl: 'work-detail.component.html',
  styleUrls: ['work-detail.component.css'],

  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class WorkDetailComponent implements OnInit{
  work: Work;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostBinding('style.display') get display() {
    return 'block';
  }
  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  constructor(
    public stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
    private service: WorkService,
    private log: Logger
  ) {
    stateService.state = 'work-detail';
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
