import { Component, OnInit } from '@angular/core';
import { widgetData$ } from '../../../assets/fixtures/data';
import { WidgetModel } from '../../models/widget.model';
import { groupBy } from '../../rxjs-operators/groupBy';
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
      groupBy('type')
    );
  }

  public get widgetData$(): Observable<{ [key: string]: WidgetModel[] }> {
    return this.dataStream$;
  }
}
