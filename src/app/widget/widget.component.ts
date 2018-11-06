import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoadMediaPendingAction } from '../store/actions/widget-media.action';
import { AppState } from '../store';
import { widgetMediaLoadingStateSelector } from '../store/selectors/widget-media.selector';

@Component({
  selector: 'teo-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {
  public isLoading: boolean = true;

  constructor(
    private _store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this._store.dispatch(new LoadMediaPendingAction());

    this._store
      .pipe((select(widgetMediaLoadingStateSelector)))
      .subscribe((isLoading: boolean) => this.isLoading = isLoading);
  }
}
