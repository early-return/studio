import {Injectable} from "@angular/core";

@Injectable()
export class Logger {

  d(message: string) {
    console.debug(message);
  }

  e(message: string) {
    console.error(message);
  }

}
