import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './cards.styles.ts';
import NikeLogo from '../../../assets/icons/Nike-logo.svg';
import AdidasLogo from '../../../assets/icons/Adidas.svg';
import PumaLogo from '../../../assets/icons/Puma.svg';
import AsicsLogo from '../../../assets/icons/Asics.svg';
import FavoriteLogo from '../../../assets/icons/Favorite.svg';

import React from 'react';
import {SneakersType} from '../../types';
import {StarsRating} from '../stars-rating';

type Props = {
  sneaker: SneakersType;
  navigation: any;
};

export const Cards = ({sneaker, navigation}: Props) => {
  const {img, price, firma, title, rating} = sneaker;

  const getLogo = (firma: string) => {
    switch (firma) {
      case 'nike':
        return <NikeLogo width={64} height={48} fill={''} />;
      case 'adidas':
        return <AdidasLogo width={64} height={48} fill={''} />;
      case 'puma':
        return <PumaLogo width={64} height={48} fill={''} />;
      case 'asics':
        return <AsicsLogo width={64} height={48} fill={''} />;
      default:
        return null;
    }
  };

  const navigateToCardHandle = () => {
    navigation.navigate('Card', {sneaker});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToCardHandle}>
      <View style={styles.iconContainer}>
        {getLogo(firma)}
        <FavoriteLogo width={24} height={24} fill={'none'} />
      </View>
      <Image style={styles.img} source={img} />
      <View style={styles.inner}>
        <View style={styles.box}>
          <Text style={styles.title}>{title}</Text>
          <StarsRating rating={rating} />
        </View>
        <Text style={styles.priceAmount}>
          $<Text style={styles.priceValue}>{price}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};
