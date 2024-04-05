import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from './cards.styles.ts';
import Nike from '../../../assets/icons/Nike-logo.svg';
import FavoriteLogo from '../../../assets/icons/Favorite.svg';
import StarEmptyLogo from '../../../assets/icons/star-empty.svg';

import React from 'react';

type Props = {
  img: ImageSourcePropType;
  title: string;
  rating: number;
};

export const Cards = (props: Props) => {
  const {img, title, rating} = props;

  const starIcons = Array.from({length: 5}, (_, index) => ({
    width: 17,
    height: 15,
    fill: rating >= index + 1 ? 'gold' : 'lightgrey',
  }));

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Nike width={64} height={48} fill={''} />
        <FavoriteLogo width={24} height={24} fill={'none'} />
      </View>
      <Image style={styles.img} source={img} />
      <View style={styles.inner}>
        <View style={styles.box}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.stars}>
            {starIcons.map((star, index) => (
              <StarEmptyLogo
                key={index}
                width={star.width}
                height={star.height}
                fill={star.fill}
              />
            ))}
          </View>
        </View>
        <Text style={styles.priceAmount}>
          $<Text style={styles.priceValue}>189</Text>
        </Text>
      </View>
    </View>
  );
};
