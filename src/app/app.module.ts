import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WeatherComponent } from './components/widget/weather/weather.component';
import { SocialInfoComponent } from './components/widget/social/social-info.component';
import { ContainerComponent } from './components/widget/container/container.component';

import { KeysPipe } from './pipes/keys.pipe';
import { FilterActivityPipe } from './pipes/filter-activity.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

const components = [
  ContainerComponent,
  SocialInfoComponent,
  WidgetComponent,
  WeatherComponent,
];

const pipes = [
  CapitalizePipe,
  FilterActivityPipe,
  KeysPipe,
  PhonePipe
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...pipes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
