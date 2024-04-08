import FavoriteLogo from '../../../assets/icons/Favorite.svg';
import {View} from 'react-native';
import React from 'react';
import NikeLogo from '../../../assets/icons/Nike-logo.svg';
import AdidasLogo from '../../../assets/icons/Adidas.svg';
import PumaLogo from '../../../assets/icons/Puma.svg';
import AsicsLogo from '../../../assets/icons/Asics.svg';
import {styles} from './icon-container.styles.ts';

type Props = {
  firma: string;
};

export const IconContainer = ({firma}: Props) => {
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
    <View style={styles.iconContainer}>
      {getLogo(firma)}
      <FavoriteLogo width={24} height={24} fill={'none'} />
    </View>
  );
};
