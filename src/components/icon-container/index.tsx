import FavoriteLogo from '../../../assets/icons/Favorite.svg';
import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import NikeLogo from '../../../assets/icons/Nike-logo.svg';
import AdidasLogo from '../../../assets/icons/Adidas.svg';
import PumaLogo from '../../../assets/icons/Puma.svg';
import AsicsLogo from '../../../assets/icons/Asics.svg';
import {styles} from './icon-container.styles.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {SneakersType} from '../../types';
import {removeItemFromCart, setItemToCart} from '../../store/slices/cart';
import {itemExistInCart} from '../../store/selectors/cart';
import {useSelector} from 'react-redux';

type Props = {
  sneaker: SneakersType;
};

export const IconContainer = ({sneaker}: Props) => {
  const {id, firma} = sneaker;

  const dispatch = useAppDispatch();

  const selectExistIdCard = useSelector(itemExistInCart(id));
  const selectedSize = useAppSelector(state => state.cart.selectedSize);

  const getLogo = (firma: string) => {
    switch (firma) {
      case 'nike':
        return <NikeLogo width={58} height={50} />;
      case 'adidas':
        return <AdidasLogo width={58} height={50} />;
      case 'puma':
        return <PumaLogo width={58} height={50} />;
      case 'asics':
        return <AsicsLogo width={58} height={50} />;
      default:
        return null;
    }
  };

  const handleFavoritePress = () => {
    dispatch(setItemToCart({...sneaker, selectedSize}));
  };

  const handleRemoveFavoritePress = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <View style={styles.iconContainer}>
      {getLogo(firma)}
      <TouchableOpacity onPress={!selectExistIdCard ? handleFavoritePress : handleRemoveFavoritePress}>
        <FavoriteLogo width={24} height={24} fill={selectExistIdCard ? '#000' : 'transparent'} />
      </TouchableOpacity>
    </View>
  );
};
