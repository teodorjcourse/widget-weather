import { createSelector, MemoizedSelector, Selector } from '@ngrx/store';
import { IWidgetData, WidgetMediaState } from '../reducers/widget-media.reducer';
import { AppState } from '../index';

export const widgetMediaSelector: Selector<AppState, WidgetMediaState> = (state: AppState) => state.widgetMedia;

export const widgetMediaLoadingStateSelector: MemoizedSelector<AppState, boolean> = createSelector(
  widgetMediaSelector,
  (state: WidgetMediaState) => state.isLoading
);

// export const widgetMediaLoadedStateSelector: MemoizedSelector<AppState, boolean> = createSelector(
//   widgetMediaSelector,
//   (state: WidgetMediaState) => state.isLoaded
// );

export const widgetMediaDataSelector: MemoizedSelector<AppState, IWidgetData> = createSelector(
  widgetMediaSelector,
  (state: WidgetMediaState) => state.data
);
