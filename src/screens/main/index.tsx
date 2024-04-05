import {Image, View} from 'react-native';
import {styles} from './main.styles.ts';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import adidasIcon from '../../../public/assets/icons/Adidas-logo-min.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export const MainScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Image source={adidasIcon} />
      </View>
    </View>
  );
};
