import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './cards.styles.ts';

import React from 'react';
import {SneakersType} from '../../types';
import {StarsRating} from '../stars-rating';
import {Price} from '../price';
import {IconContainer} from '../icon-container';
import {Title} from '../title';

type Props = {
  sneaker: SneakersType;
  navigation: any;
};

export const Cards = ({sneaker, navigation}: Props) => {
  const {img, price, firma, title, rating} = sneaker;

  const navigateToCardHandle = () => {
    navigation.navigate('Card', {sneaker});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToCardHandle}>
      <IconContainer firma={firma} />
      <Image style={styles.img} source={img} />
      <View style={styles.inner}>
        <View style={styles.box}>
          <Title title={title} />
          <StarsRating rating={rating} />
        </View>
        <Price price={price} />
      </View>
    </TouchableOpacity>
  );
};
