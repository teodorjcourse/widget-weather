import { of } from 'rxjs';
import { WidgetModel } from '../../app/models/widget.model';

const widgetData: WidgetModel[] = [
  {
    img: 'aguamarina',
    address: 'BQ Aguamarina Boutique;Sant Antoni de la Platja,;41, Can Pastilla, Spain',
    phone:  '9025706477',
    country_code: 34,
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
    phone:  '3033861123',
    country_code: 66,
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
    img: 'go_fishing',
    address: 'о. Рыбное',
    phone:  '1234567894',
    country_code: 1,
    weather: {
      title: 'Don\'t forget raincoat',
      icon: 'rainy',
      water: 14,
      temperature: 18
    },
    social_info: {
      title: 'Only for men',
      img: 'go_fishing',
      followers: 1000,
      following: 999
    },
    type: 'fishing'
  },
  {
    img: 'tui',
    address: 'TUI;г.Киев,;ул. Трехсвятительская, 5/1',
    phone:  '0986071482',
    country_code: 38,
    weather: {
      title: 'Go to bed',
      icon: 'night',
      water: 10,
      temperature: 28
    },
    social_info: {
      title: 'Tours for babushkas',
      img: 'tui',
      followers: 1,
      following: 1024
    },
    type: 'tours'
  },
  {
    img: 'joinup',
    address: 'Join UP!;01033, г.Киев,;ул. Жилянская, 55',
    phone:  '0986071482',
    country_code: 38,
    weather: {
      title: 'Time to sleep',
      icon: 'night',
      water: 9,
      temperature: 27
    },
    social_info: {
      title: 'Tours for dedushkas',
      img: 'joinup',
      followers: 3,
      following: 1024
    },
    type: 'tours'
  }
];

export const widgetData$ = of(widgetData);
