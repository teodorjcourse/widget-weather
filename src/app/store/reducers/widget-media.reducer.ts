import {
  WidgetMediaActionsTypes,
  WidgetMediaActions, LoadMediaSuccessAction
} from '../actions/widget-media.action';
import { WidgetModel } from '../../models/widget.model';

export interface IWidgetData {
  [key: string]: WidgetModel[];
}

export class WidgetMediaState {
  public isLoading: boolean = false;
  public isLoaded: boolean = false;
  public data: IWidgetData = {};

  public constructor(initialParams: Partial<WidgetMediaState>) {
    Object.assign(this, initialParams);
  }
}

const INITIAL_STATE: WidgetMediaState = new WidgetMediaState({ isLoading: false, isLoaded: false });

const groupBy = <T>(property: string, S1: T[]): { [key: string]: Array<T> } => {
  return S1.reduce((acc: { [key: string]: Array<T> }, data: T) => {
    acc[data[property]] = acc[data[property]] || [];
    acc[data[property]].push(data);
    return acc;
  }, {});
}

export function widgetMediaReducer(state: WidgetMediaState = INITIAL_STATE, action: WidgetMediaActions): WidgetMediaState {
  switch (action.type) {
    case WidgetMediaActionsTypes.LOAD_MEDIA_START:
      return new WidgetMediaState({ isLoading: true, isLoaded: false });

    case WidgetMediaActionsTypes.LOAD_MEDIA_SUCCESS:
      const payload: WidgetModel[] = (action as LoadMediaSuccessAction).payload;
      const groupedData: IWidgetData = groupBy('type', payload);
      groupedData['all'] = Object.keys(groupedData).reduce((acc: WidgetModel[], key: string) => {
        return [...acc, ...groupedData[key]];
      }, []);

      return new WidgetMediaState({ isLoading: false, isLoaded: true, data: groupedData });

    case WidgetMediaActionsTypes.LOAD_MEDIA_ERROR:
      return state;

    default:
      return state;
  }
}
