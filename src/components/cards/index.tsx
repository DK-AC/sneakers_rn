import {Image, Text, View} from 'react-native';
import {styles} from './cards.styles.ts';
import Nike from '../../../public/assets/icons/Nike-logo.svg';
import FavoriteLogo from '../../../public/assets/icons/Favorite.svg';
import StarEmptyLogo from '../../../public/assets/icons/star-empty.svg';
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
      <View style={styles.inner}>
        <View style={styles.box}>
          <Text style={styles.title}>Nike Air Max Plus |||</Text>
          <View style={styles.stars}>
            <StarEmptyLogo width={17} height={15} fill={'gold'} />
            <StarEmptyLogo width={17} height={15} fill={'gold'} />
            <StarEmptyLogo width={17} height={15} fill={'gold'} />
            <StarEmptyLogo width={17} height={15} fill={'gold'} />
            <StarEmptyLogo width={17} height={15} fill={'lightgrey'} />
          </View>
        </View>
        <Text style={styles.priceAmount}>
          $<Text style={styles.priceValue}>189</Text>
        </Text>
      </View>
    </View>
  );
};
