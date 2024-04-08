import {ImageSourcePropType} from 'react-native';
import {InfoSneaker} from '../constants';

export type SneakersType = {
  id: string;
  title: string;
  rating: number;
  img: ImageSourcePropType;
  price: number;
  firma: string;
  icon: string;
  description: string;
  reviews: ReviewsType[];
  delivery: string;
};

export type ReviewsType = {
  id: string;
  author: string;
  comment: string;
  rating: number;
};
