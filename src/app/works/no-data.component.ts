import {Component} from "@angular/core";
@Component({
  selector: 'no-data',
  template: `
      <div class="no-data">
        <span class="fa fa-refresh fa-spin"></span> 正在加载数据中...
      </div>
  `,
  styles: [`
    .no-data {
      text-align: center;
      color: #EA4335;
      font-size: 1.5em;
      height: 5em;
      line-height: 5em;
     }
    
  `]
})
export class NoDataComponent {}
