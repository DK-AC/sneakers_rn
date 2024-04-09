import FavoriteLogo from '../../../assets/icons/Favorite.svg';
import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import NikeLogo from '../../../assets/icons/Nike-logo.svg';
import AdidasLogo from '../../../assets/icons/Adidas.svg';
import PumaLogo from '../../../assets/icons/Puma.svg';
import AsicsLogo from '../../../assets/icons/Asics.svg';
import {styles} from './icon-container.styles.ts';
import {useAppDispatch} from '../../store/hooks';
import {SneakersType} from '../../types';
import {removeItemFromCart, setItemToCart} from '../../store/slices/cart';
import {itemExistInCart} from '../../store/selectors/cart';
import {useSelector} from 'react-redux';

type Props = {
  sneaker: SneakersType;
};

export const IconContainer = ({sneaker}: Props) => {
  const dispatch = useAppDispatch();

  const selectExistIdCard = useSelector(itemExistInCart(sneaker?.id));

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

  const handleFavoritePress = () => {
    dispatch(setItemToCart(sneaker));
  };

  const handleRemoveFavoritePress = () => {
    dispatch(removeItemFromCart(sneaker.id));
  };

  return (
    <View style={styles.iconContainer}>
      {getLogo(sneaker?.firma!)}
      <TouchableOpacity onPress={!selectExistIdCard ? handleFavoritePress : handleRemoveFavoritePress}>
        <FavoriteLogo width={24} height={24} fill={selectExistIdCard ? '#8A8A9D' : 'transparent'} />
      </TouchableOpacity>
    </View>
  );
};
