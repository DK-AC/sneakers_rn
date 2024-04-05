import {Image, View} from 'react-native';
import {styles} from './cards.styles.ts';
import Nike from '../../../public/assets/icons/Nike-logo.svg';
import FavoriteLogo from '../../../public/assets/icons/Favorite.svg';
import nikeMain from '../../../public/assets/images/nikeMain.png';
import React from 'react';

export const Cards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Nike width={64} height={48} fill={''} />
        <FavoriteLogo width={24} height={24} fill={'none'} />
      </View>
      <Image style={styles.img} source={nikeMain} />
    </View>
  );
};
