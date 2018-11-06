import { ChooseActivityActions, ChooseActivityActionTypes } from '../actions/activity.action';
import { WidgetModel } from '../../models/widget.model';

export class ChosenActivityState {
  public activity: WidgetModel;

  public constructor(activity: WidgetModel) {
    this.activity = activity;
  }
}

export function chooseActivityReducer(state: ChosenActivityState = null, action: ChooseActivityActions) {
  switch (action.type) {
    case ChooseActivityActionTypes.CHOOSE_ACTIVITY:
      return new ChosenActivityState(action.payload);

    default:
      return state;
  }
}
