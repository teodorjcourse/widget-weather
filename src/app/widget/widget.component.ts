import { Component, OnInit } from '@angular/core';
import { WidgetModel } from '../models/widget.model';
import { select, Store } from '@ngrx/store';
import { LoadMediaPendingAction } from '../store/actions/widget-media.action';
import { widgetMediaDataSelector, widgetMediaLoadingStateSelector } from '../store/selectors/widget-media.selector';
import { IWidgetData } from '../store/reducers/widget-media.reducer';
import { AppState } from '../store';

@Component({
  selector: 'teo-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  public widgetData: { [key: string]: WidgetModel[] };
  public isLoading: boolean = true;

  constructor(
    private _store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this._store.dispatch(new LoadMediaPendingAction());
    this._store
      .pipe(select(widgetMediaDataSelector))
      .subscribe((data: IWidgetData) => this.widgetData = data);

    this._store
      .pipe((select(widgetMediaLoadingStateSelector)))
      .subscribe((isLoading: boolean) => this.isLoading = isLoading);
  }
}
