import StarEmptyLogo from '../../../assets/icons/star-empty.svg';
import {View} from 'react-native';
import React from 'react';
import {styles} from './stars-rating.styles.ts';

type Props = {
  rating: number;
};

export const StarsRating = ({rating}: Props) => {
  const starIcons = Array.from({length: 5}, (_, index) => ({
    width: 17,
    height: 15,
    fill: rating >= index + 1 ? 'gold' : 'lightgrey',
  }));

  return (
    <View style={styles.stars}>
      {starIcons.map(({width, height, fill}, index) => (
        <StarEmptyLogo key={index} width={width} height={height} fill={fill} />
      ))}
    </View>
  );
};
