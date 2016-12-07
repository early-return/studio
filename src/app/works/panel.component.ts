import {Component, Input} from "@angular/core";
@Component({
  selector: 'panel',
  template: `
    <div class="panel">
          <div class="panel-heading row">
            <span class="panel-icon col-xs-1"><span [class]="iconClass"></span></span>
            <h3 class="panel-title col-xs-11">
              {{title}}
            </h3>
          </div>
          <div class="panel-body row">
            <div class="col-xs-11 col-xs-offset-1">
              <div class="content">
                <p *ngFor="let c of contents">{{c}}</p>
              </div>
            </div>
          </div>
        </div>
  `,
  styles: [`
    
.panel {
  border: 1px solid #EEE;
  padding-top: .5em;
  padding-bottom: .5em;
  font-family: 'Julius Sans One', sans-serif, source-han-sans-simplified-c, "Microsoft YaHei", SimHei;
}
.panel .panel-heading .panel-title {
  font-weight: bold;
  color: #333;
  font-size: 1.2em;
}
.panel .panel-icon {
  color: #34A853;
  line-height: 1.5em;
  text-align: right;
  padding-left: 0;
  padding-right: 0;
}
.panel-body {
  padding-top: 0;
  padding-bottom: 0;
}
.panel .content {
  font-size: 1em;
  color: #666;
}
  `]
})
export class PanelComponent {
  @Input() title: string;
  @Input() iconClass: string;
  @Input() contents: string[];
}
