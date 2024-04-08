import {Image, Text, View} from 'react-native';
import {styles} from './card.styles.ts';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import FavoriteLogo from '../../../assets/icons/Favorite.svg';
import StarEmptyLogo from '../../../assets/icons/star-empty.svg';
import NikeLogo from '../../../assets/icons/Nike-logo.svg';
import AdidasLogo from '../../../assets/icons/Adidas.svg';
import PumaLogo from '../../../assets/icons/Puma.svg';
import AsicsLogo from '../../../assets/icons/Asics.svg';
import {SneakersType} from '../../types';
import {RootStackParamList} from '../../types/navigation.types.ts';

type Props = NativeStackScreenProps<RootStackParamList, 'Card'>;

export const CardScreen = (props: Props) => {
  const {
    navigation,
    route: {params},
  } = props;

  const {firma, img, id, icon, price, title, rating} = params.sneaker;

  const starIcons = Array.from({length: 5}, (_, index) => ({
    width: 17,
    height: 15,
    fill: 5 >= index + 1 ? 'gold' : 'lightgrey',
  }));

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
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {getLogo(firma)}
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
          $<Text style={styles.priceValue}>{price}</Text>
        </Text>
      </View>
    </View>
  );
};
