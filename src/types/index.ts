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
  reviews: ReviewsType[];
  delivery: string;
  selectedSize?: number;
};

export type ReviewsType = {
  id: string;
  author: string;
  comment: string;
  rating: number;
};
