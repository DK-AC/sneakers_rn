import {Image, View} from 'react-native';
import {styles} from './card.styles.ts';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation.types.ts';
// @ts-ignore
import {SliderBox} from 'react-native-image-slider-box';
import {ShoeSizes} from '../../components/shoe-sizes';
import {StarsRating} from '../../components/stars-rating';
import {Price} from '../../components/price';
import {IconContainer} from '../../components/icon-container';
import {Title} from '../../components/title';
import {Info} from '../../components/info';
import {sneakersData} from '../../data';

type Props = NativeStackScreenProps<RootStackParamList, 'Card'>;

export const CardScreen = (props: Props) => {
  const {
    route: {params},
  } = props;

  const {img, reviews, delivery, description, price, title, rating} = params.sneaker;

  return (
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <IconContainer sneaker={params.sneaker} />
        <Image style={styles.img} source={img} />
        <SliderBox
          dotStyle={{width: 8, height: 8}}
          sliderBoxHeight={320}
          resizeMode={'contain'}
          images={[img, img, img, img, img, img]}
          onCurrentImagePressed={(index: number) => console.warn(`image ${index + 1} pressed`)}
          dotColor="#3A63E0"
          inactiveDotColor="#8A8A9D"
          imageLoadingColor="#3A63E0"
        />

        <View style={styles.inner}>
          <View style={styles.box}>
            <Title title={title} />
            <StarsRating rating={rating} />
          </View>
          <Price price={price} />
        </View>
        <ShoeSizes />
        <Info description={description} reviews={reviews} delivery={delivery} />
      </View>
    </View>
  );
};
