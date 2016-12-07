import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Work } from './work';
import {Http, Headers} from "@angular/http";

@Injectable()
export class WorkService {
  private worksUrl = 'assets/data/works.json';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getWorks() {
    return this.http.get(this.worksUrl)
      .toPromise()
      .then(response => response.json().data as Work[]);
  }

  getWork(id: number | string) {
    return this.getWorks()
      .then(works => works.find(work => work.id === +id));
  }

}
