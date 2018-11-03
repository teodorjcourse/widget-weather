import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _choosenItem$$: ReplaySubject<any> = new ReplaySubject(1);

  public get items(): Observable<any[]> {
    return of([]);
  }

  public get choosenItem(): Observable<any> {
    return this._choosenItem$$.asObservable();
  }

  public set chooseItem(item: any) {
    this._choosenItem$$.next(item);
  }
}
