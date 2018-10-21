import { Component, Input } from '@angular/core';
import { Weather } from '../../../models/widget.model';

@Component({
  selector: 'teo-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  @Input()
  public weather: Weather;

  constructor() { }
}
