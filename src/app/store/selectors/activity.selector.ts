import { createSelector, MemoizedSelector, Selector } from '@ngrx/store';
import { AppState } from '../index';
import { ChosenActivityState } from '../reducers/activity.reducer';
import { SocialInfo, Weather } from '../../models/widget.model';

export const activitySelector: Selector<AppState, ChosenActivityState> = (state: AppState) => state.chosenActivity;

// export const chosenActivityStateSelector: MemoizedSelector<AppState, WidgetModel> = createSelector(
//   activitySelector,
//   (state: ChosenActivityState) => state.activity
// );

export const weatherSelector: MemoizedSelector<AppState, Weather> = createSelector(
  activitySelector,
  (state: ChosenActivityState) => state.activity.weather
);

export const socialSelector: MemoizedSelector<AppState, SocialInfo> = createSelector(
  activitySelector,
  (state: ChosenActivityState) => state.activity.social_info
);
