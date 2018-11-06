import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/widget.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store';
import { weatherSelector } from '../../store/selectors/activity.selector';

@Component({
  selector: 'teo-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit{
  public weather: Weather;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store
      .pipe(select(weatherSelector))
      .subscribe((weather: Weather) => this.weather = weather );
  }
}
