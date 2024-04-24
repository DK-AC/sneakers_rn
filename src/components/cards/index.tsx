import {Image, StyleProp, Text, TouchableOpacity, View} from 'react-native';
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
  customStyles?: StyleProp<any>;
  favoriteScreen?: boolean;
};

export const Cards = ({sneaker, navigation, favoriteScreen, customStyles}: Props) => {
  const {img, selectedSize, price, title, rating} = sneaker;

  const navigateToCardHandle = () => {
    navigation.navigate('Card', {sneaker});
  };

  return (
    <TouchableOpacity style={{...styles.container, ...customStyles}} onPress={navigateToCardHandle}>
      <IconContainer sneaker={sneaker} />
      <Image style={styles.img} source={img} />
      <View style={styles.inner}>
        <View style={styles.box}>
          <Title title={title} />
          <StarsRating rating={rating} />
        </View>
        {favoriteScreen && selectedSize && (
          <View style={styles.sizeContainer}>
            <Text>size</Text>
            <Text style={styles.sizeNumber}>{selectedSize}</Text>
          </View>
        )}
        <Price price={price} />
      </View>
    </TouchableOpacity>
  );
};
