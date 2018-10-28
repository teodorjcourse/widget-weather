import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WeatherComponent } from './components/widget/weather/weather.component';
import { SocialInfoComponent } from './components/widget/social/social-info.component';
import { ContainerComponent } from './components/widget/container/container.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterActivityPipe } from './pipes/filter-activity.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { PhonePipe } from './pipes/phone.pipe';

import { WidgetService } from './common/services/widget.service';
import { HttpClientModule } from '@angular/common/http';

import { API_ENDPOINT, API_ENDPOINT_TOKEN } from '../config';

const components = [
  ContainerComponent,
  SocialInfoComponent,
  WidgetComponent,
  WeatherComponent,
];

const modules = [
  BrowserModule,
  HttpClientModule
];

const pipes = [
  CapitalizePipe,
  FilterActivityPipe,
  KeysPipe,
  PhonePipe
];

const providers = [
  {
    provide: API_ENDPOINT_TOKEN,
    useValue: API_ENDPOINT
  },
  WidgetService
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...pipes
  ],
  imports: [
    ...modules
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
