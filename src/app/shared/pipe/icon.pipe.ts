import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'icon'})
export class IconPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    let lv = value.toLowerCase();
    let result: string;
    switch (lv) {
      case 'about':
        result = 'fa fa-info';
        break;
      case 'book':
        result = 'fa fa-book';
        break;
      case 'copy':
        result = 'fa fa-copyright';
        break;
      case 'link':
        result = 'fa fa-link';
        break;
      case 'user':
        result = 'fa fa-user';
        break;
      case 'heart':
        result = 'fa fa-heart';
        break;
      case 'flag':
        result = 'fa fa-flag';
        break;
      case 'code':
        result = 'fa fa-code';
        break;


      case 'web':
        result = 'fa fa-chrome';
        break;
      case 'android':
        result = 'fa fa-android';
        break;
      case 'iphone':
        result = 'fa fa-mobile';
        break;
      case 'desktop':
        result = 'fa fa-desktop';
        break;


      case 'java':
        result = 'fa fa-coffee';
        break;
      case 'javascript':
      case 'typescript':
      case 'coffeescript':
      case 'html':
        result = 'fa fa-html5';
        break;
      case 'c#':
        result = 'fa fa-slack';
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
