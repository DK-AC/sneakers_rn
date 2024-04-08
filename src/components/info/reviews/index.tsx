import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './reviews.styles.ts';
import {ReviewsType} from '../../../types';
import {StarsRating} from '../../stars-rating';

type Props = {
  reviews: ReviewsType[];
};

export const Reviews = ({reviews}: Props) => {
  return (
    <View>
      {reviews.map(({id, rating, author, comment}) => (
        <View key={id} style={styles.reviewContainer}>
          <Text style={styles.author}>{author}</Text>
          <StarsRating rating={rating} />
          <Text style={styles.comment}>{comment}</Text>
        </View>
      ))}
    </View>
  );
};
