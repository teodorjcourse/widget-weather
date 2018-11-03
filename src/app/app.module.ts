import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WeatherComponent } from './widget/weather/weather.component';
import { SocialInfoComponent } from './widget/social/social-info.component';
import { ContainerComponent } from './widget/container/container.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterActivityPipe } from './pipes/filter-activity.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { PhonePipe } from './pipes/phone.pipe';

import { WidgetService } from './common/services/widget.service';
import { HttpClientModule } from '@angular/common/http';

import { API_ENDPOINT, API_ENDPOINT_TOKEN } from '../config';
import { UnlessDirective } from './directives/unless.directive';

const components = [
  ContainerComponent,
  SocialInfoComponent,
  WidgetComponent,
  WeatherComponent,
];

const directives = [
  UnlessDirective
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
    ...pipes,
    ...directives
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
