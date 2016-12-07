import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'iconClass'})
export class IconPipe implements PipeTransform {

  transform(value: string): string {
    let lv = value.toLowerCase();
    let result: string;
    switch (lv) {
      case 'about':
        result = 'glyphicon glyphicon-info-sign';
        break;
      case 'book':
        result = 'glyphicon glyphicon-book';
        break;
      case 'copy':
        result = 'glyphicon glyphicon-copyright-mark';
        break;
      case 'link':
        result = 'glyphicon glyphicon-link';
        break;


      case 'web':
        result = 'glyphicon glyphicon-globe';
        break;
      case 'android':
      case 'iphone':
        result = 'glyphicon glyphicon-phone';
        break;
      case 'desktop':
        result = 'glyphicon glyphicon-credit-card'
        break;


      case 'java':
        result = 'glyphicon glyphicon-leaf';
        break;
      case 'javascript':
        result = 'glyphicon glyphicon-fire';
        break;
      case 'c#':
        result = 'glyphicon glyphicon-asterisk';
        break;
      case 'python':
        result = '';
        break;



      default:
        result = '';
    }
    return result;
  }

}
