import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { LoadMediaErrorAction, LoadMediaSuccessAction, WidgetMediaActionsTypes } from '../actions/widget-media.action';
import { API_ENDPOINT_TOKEN } from '../../../config';

@Injectable()
export class WidgetMediaEffect {
  @Effect()
  public widgetMedia$: Observable<Action> = this.actions$.pipe(
    ofType(WidgetMediaActionsTypes.LOAD_MEDIA_START),
    switchMap(() =>
      this._httpClient.get(this._apiEndpoint).pipe(
        map((res: any) => new LoadMediaSuccessAction(res)),
        catchError(error => of(new LoadMediaErrorAction(error)))
      )
    )
  );

  constructor(
    private _httpClient: HttpClient,
    private actions$: Actions,
    @Inject(API_ENDPOINT_TOKEN) private _apiEndpoint: string
  ) {}
}
