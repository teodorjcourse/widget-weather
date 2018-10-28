import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WidgetModel } from '../../models/widget.model';
import { map } from 'rxjs/operators';
import { groupBy } from '../../rxjs-operators/groupBy';
import { API_ENDPOINT_TOKEN } from '../../../config';

@Injectable()
export class WidgetService {

  constructor(
    private _httpClient: HttpClient,
    @Inject(API_ENDPOINT_TOKEN) private _apiEndpoint: string
  ) { }

  public get(): Observable<{ [key: string]: WidgetModel[] }> {
    return this._httpClient.get(this._apiEndpoint).pipe(
      groupBy('type'),
      map((res: { [key: string]: WidgetModel[] }) => {
        res['all'] = Object.keys(res).reduce((acc: WidgetModel[], key: string) => {
          return [...acc, ...res[key]];
        }, []);

        return res;
      })
    );
  }
}
