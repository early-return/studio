import {Component} from "@angular/core";
@Component({
  selector: 'no-data',
  template: `
      <div class="no-data">
        <span class="glyphicon glyphicon-refresh icon"></span> 正在加载数据中...
      </div>
  `,
  styles: [`
    .no-data .icon {
      animation-name: no-data-icon;
      animation-iteration-count: infinite;
      animation-duration: 5s;
    }
    .no-data {
      text-align: center;
      color: #EA4335;
      font-size: 1.5em;
      height: 5em;
      line-height: 5em;
     }
    
    
    @keyframes no-data-icon {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `]
})
export class NoDataComponent {}
