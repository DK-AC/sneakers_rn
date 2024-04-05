import {SneakersType} from '../types';

import nikeMain from './../../assets/images/nikeMain.png';
import nikeWhite from './../../assets/images/nikeAirMaxWhite.png';
import adidas from './../../assets/images/adidas.png';
import nikeAirRed from './../../assets/images/nikeAirRed.png';

export const sneakersData: SneakersType[] = [
  {
    id: '1',
    icon: '',
    img: nikeMain,
    title: 'Nike Air Max 3 Plus',
    price: 189,
    rating: 5,
    firma: 'nike',
  },
  {
    id: '2',
    icon: '',
    img: nikeWhite,
    title: 'Adidas Ultra Boost',
    price: 199,
    rating: 4,
    firma: 'adidas',
  },
  {
    id: '3',
    icon: '',
    img: nikeAirRed,
    title: 'Puma Future Rider',
    price: 129,
    rating: 4,
    firma: 'puma',
  },
];
