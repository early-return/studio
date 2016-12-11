import {Component, OnInit, OnDestroy} from "@angular/core";
import {StateService} from "../shared/service/state.service";
@Component({
  selector: 'no-data',
  template: `
      <div class="no-data">
        <p *ngIf="!timeouted"><span class="fa fa-refresh fa-spin"></span> 正在加载数据中...</p>
        <p class="timeouted" *ngIf="timeouted"><span class="fa fa-exclamation-triangle"></span> 数据加载超时！</p>
      </div>
  `,
  styles: [`
    .no-data {
      text-align: center;
      color: #34A853;
      font-size: 1.5em;
      height: 5em;
      line-height: 5em;
     }
    .timeouted {
      color: #EA4335;
    }
  `]
})
export class NoDataComponent implements OnInit, OnDestroy{

  timeouted: boolean = false;
  timer;

  constructor(
    public stateService: StateService
  ) {

  }

  ngOnInit(): void {
    this.timer = setTimeout(() => {
      this.stateService.state = 'error';
      this.timeouted = true;
    }, 10000)
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

}
