export class SocialInfo {
  public title: string;
  public img: string;
  public followers: number;
  public following: number;
}

export class Weather {
  public title: string;
  public icon: string;
  public water: number;
  public temperature: number;
}

export class WidgetModel {
  public type: string;
  public img: string;
  public address: string;
  public phone:  string;
  public country_code: number;

  public weather: Weather;
  public social_info: SocialInfo;
}
