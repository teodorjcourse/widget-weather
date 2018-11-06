import { WidgetModel } from '../../models/widget.model';
import { Action } from '@ngrx/store';

export enum WidgetMediaActionsTypes {
  LOAD_MEDIA_START = 'LOAD_MEDIA_START',
  LOAD_MEDIA_SUCCESS = 'LOAD_MEDIA_SUCCESS',
  LOAD_MEDIA_ERROR = 'LOAD_MEDIA_ERROR'
}


export class LoadMediaPendingAction implements Action {
  public readonly type: string = WidgetMediaActionsTypes.LOAD_MEDIA_START;
}

export class LoadMediaSuccessAction implements Action {
  public readonly type: string = WidgetMediaActionsTypes.LOAD_MEDIA_SUCCESS;
  public payload: WidgetModel[];

  public constructor(payload: WidgetModel[]) {
    this.payload = payload;
  }
}

export class LoadMediaErrorAction implements Action {
  public readonly type: string = WidgetMediaActionsTypes.LOAD_MEDIA_ERROR;
  public payload: any;

  public constructor(payload: any) {
    this.payload = payload;
  }
}

export type WidgetMediaActions =
  | LoadMediaPendingAction
  | LoadMediaSuccessAction
  | LoadMediaErrorAction;
