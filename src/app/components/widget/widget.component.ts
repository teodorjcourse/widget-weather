import { Component, OnInit } from '@angular/core';
import { widgetData$ } from '../../../assets/fixtures/data';
import { WidgetModel } from '../../models/widget.model';
import { groupBy } from '../../rxjs-operators/groupBy';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'teo-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  private dataStream$: Observable<{ [key: string]: WidgetModel[] }>;
  public selectedActivity: WidgetModel;

  constructor() { }

  ngOnInit() {
    this.dataStream$ = widgetData$.pipe(
      groupBy('type'),
      map((res: { [key: string]: WidgetModel[] }) => {
        res['all'] = Object.keys(res).reduce((acc: WidgetModel[], key: string) => {
          return [...acc, ...res[key]];
        }, []);

        return res;
      })
    );
  }

  public get widgetData$(): Observable<{ [key: string]: WidgetModel[] }> {
    return this.dataStream$;
  }
}
