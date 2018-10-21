import { Pipe, PipeTransform } from '@angular/core';
import {WidgetModel} from '../models/widget.model';

@Pipe({
  name: 'filterActivity'
})
export class FilterActivityPipe implements PipeTransform {

  transform(widgetData: WidgetModel, category: string): any {
    return widgetData[category];
  }
}
