import { widgetMediaReducer, WidgetMediaState } from './reducers/widget-media.reducer';
import { chooseActivityReducer, ChosenActivityState } from './reducers/activity.reducer';

export interface AppState {
  chosenActivity: ChosenActivityState;
  widgetMedia: WidgetMediaState;
}

export const reducers = {
  chosenActivity: chooseActivityReducer,
  widgetMedia: widgetMediaReducer
};
