import { Component } from '@angular/core';
import {StateService} from "../shared/service/state.service";

@Component({
  selector: 'not-found',
  template: `
<div class="container-fluid">
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <h1 class="title">出错啦</h1>
    <h3 class="subtitle"><span class="fa fa-exclamation-triangle"></span>Page Not Found!</h3>
    <p class="content">该页面走丢了，请<a href="mailto:i@zhiqing.info">联系管理员</a>找回来吧！</p>
  </div>
</div>

`,
  styles: [`
h1.title {
  color: #EA4335;
  font-weight: 900;
  text-align: right;
  margin-bottom: 1em;
}
.subtitle {
  color: #EA4335;
  font-size: 2em;
  text-align: center;
  margin-top: 2em;
}
.content {
  color: #666;
  text-align: center;
  margin-bottom: 3em;
}

`]
})
export class PageNotFoundComponent {

  constructor(
    public stateService: StateService
  ) {
    stateService.title = 'Not Found!';
    stateService.state = 'error';
  }
}
