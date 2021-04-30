import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const prefix = value.substring(0, 3);
    const firstPart = value.substring(3, 6);
    const lastPart = value.substr(6);
    return '(' + prefix + ') ' + firstPart + '-' + lastPart;
  }

}
