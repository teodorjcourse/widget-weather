import { Component, OnInit } from '@angular/core';
import { widgetData$ } from '../../../assets/fixtures/data';
import { WidgetModel } from '../../models/widget.model';
import { groupBy } from '../../rxjs-operators/groupBy';
import { tap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'teo-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  public widgetData: { [key: string]: WidgetModel[] };
  public selectedActivity: WidgetModel;
  public isLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    widgetData$.pipe(
      delay(1500),
      tap( _ => this.isLoading = false),
      groupBy('type'),
      map((res: { [key: string]: WidgetModel[] }) => {
        res['all'] = Object.keys(res).reduce((acc: WidgetModel[], key: string) => {
          return [...acc, ...res[key]];
        }, []);

        return res;
      })
      ).subscribe((data: { [key: string]: WidgetModel[] }) =>  this.widgetData = data );
  }
}
