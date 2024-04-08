import {Image, Text, View} from 'react-native';
import {styles} from './card.styles.ts';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import FavoriteLogo from '../../../assets/icons/Favorite.svg';
import NikeLogo from '../../../assets/icons/Nike-logo.svg';
import AdidasLogo from '../../../assets/icons/Adidas.svg';
import PumaLogo from '../../../assets/icons/Puma.svg';
import AsicsLogo from '../../../assets/icons/Asics.svg';
import {RootStackParamList} from '../../types/navigation.types.ts';
// @ts-ignore
import {SliderBox} from 'react-native-image-slider-box';
import {ShoeSizes} from '../../components/shoe-sizes';
import {StarsRating} from '../../components/stars-rating';

type Props = NativeStackScreenProps<RootStackParamList, 'Card'>;

export const CardScreen = (props: Props) => {
  const {
    route: {params},
  } = props;

  const {firma, img, id, icon, price, title, rating} = params.sneaker;

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
      <View style={styles.cardBox}>
        <View style={styles.iconContainer}>
          {getLogo(firma)}
          <FavoriteLogo width={24} height={24} fill={'none'} />
        </View>
        <Image style={styles.img} source={img} />
        <SliderBox
          dotStyle={{width: 8, height: 8}}
          sliderBoxHeight={320}
          resizeMode={'contain'}
          images={[img, img, img, img, img, img]}
          onCurrentImagePressed={(index: number) =>
            console.warn(`image ${index + 1} pressed`)
          }
          dotColor="#3A63E0"
          inactiveDotColor="#8A8A9D"
          imageLoadingColor="#3A63E0"
        />

        <View style={styles.inner}>
          <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <StarsRating rating={rating} />
          </View>
          <Text style={styles.priceAmount}>
            $<Text style={styles.priceValue}>{price}</Text>
          </Text>
        </View>
        <ShoeSizes />
      </View>
    </View>
  );
};
