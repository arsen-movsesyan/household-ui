import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ssn'
})
export class SsnPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return value.substring(0, 3) + '-' + value.substring(3, 5) + '-' + value.substring(5, 9);
  }
}
