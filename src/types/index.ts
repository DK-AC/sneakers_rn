import {ImageSourcePropType} from 'react-native';

export type SneakersType = {
  id: string;
  title: string;
  rating: number;
  img: ImageSourcePropType;
  price: number;
  firma: string;
  icon: string;
  description: string;
};
