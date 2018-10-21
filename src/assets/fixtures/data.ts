import { of } from 'rxjs';
import { WidgetModel } from '../../app/models/widget.model';

const widgetData: WidgetModel[] = [
  {
    img: 'aguamarina',
    address: 'BQ Aguamarina Boutique;Sant Antoni de la Platja,;41, Can Pastilla, Spain',
    phone:  902570647,
    country_code: 0,
    weather: {
      title: 'Sunny bolearic islands',
      icon: 'sunny',
      water: 23,
      temperature: 34
    },
    social_info: {
      title: 'Be the part of sunny Spain',
      img: 'aguamarina',
      followers: 345,
      following: 2567
    },
    type: 'hotels'
  },
  {
    img: 'railay',
    address: 'Railay Village Resort;544 Moo 2, Ao Nang Muang,;81000 Railay Beach, Thailand',
    phone:  303386112,
    country_code: 0,
    weather: {
      title: 'Do not forget the sunscreen',
      icon: 'sunny',
      water: 30,
      temperature: 40
    },
    social_info: {
      title: 'You gotta go here! :)',
      img: 'railay',
      followers: 156000,
      following: 80000
    },
    type: 'hotels'
  },
  {
    img: '',
    address: '',
    phone:  0,
    country_code: 1,
    weather: {
      title: '',
      icon: '',
      water: 0,
      temperature: 0
    },
    social_info: {
      title: '',
      img: '',
      followers: 1000,
      following: 999
    },
    type: 'fishing'
  },
  {
    img: '',
    address: '',
    phone:  0,
    country_code: 1,
    weather: {
      title: '',
      icon: '',
      water: 0,
      temperature: 0
    },
    social_info: {
      title: '',
      img: '',
      followers: 34,
      following: 1024
    },
    type: 'tours'
  },
  {
    img: '',
    address: '',
    phone:  0,
    country_code: 1,
    weather: {
      title: '',
      icon: '',
      water: 0,
      temperature: 0
    },
    social_info: {
      title: '',
      img: '',
      followers: 204,
      following: 1000
    },
    type: 'weather'
  }
];

export const widgetData$ = of(widgetData);
