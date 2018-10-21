import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(widgetData: any): string[] {
    return Object.keys(widgetData);
  }
}
