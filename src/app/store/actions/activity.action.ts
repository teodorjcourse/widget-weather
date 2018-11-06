import { Action } from '@ngrx/store';
import { WidgetModel } from '../../models/widget.model';

export enum ChooseActivityActionTypes {
  CHOOSE_ACTIVITY = 'CHOOSE_ACTIVITY'
}

export class ChooseActivityAction implements Action {
  public readonly type: string = ChooseActivityActionTypes.CHOOSE_ACTIVITY;
  public payload: WidgetModel;

  public constructor(payload: WidgetModel) {
    this.payload = payload;
  }
}

export type ChooseActivityActions =
  | ChooseActivityAction;
