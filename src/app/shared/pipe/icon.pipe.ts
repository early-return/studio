import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'icon'})
export class IconPipe implements PipeTransform {

  transform(value: string, args?: string): string {
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
      case 'typescript':
      case 'coffeescript':
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
    if(args == 'class') {
      return result;
    }
    return '<span class="' + result + '"></span>';
  }

}
