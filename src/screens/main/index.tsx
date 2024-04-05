import {View} from 'react-native';
import {styles} from './main.styles.ts';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Adidas from '../../../public/assets/icons/Adidas.svg';
import Nike from '../../../public/assets/icons/Nike.svg';
import Puma from '../../../public/assets/icons/Puma.svg';
import Asics from '../../../public/assets/icons/Asics.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export const MainScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Nike width={58} height={30} fill={'blue'} />
        <Adidas width={58} height={30} fill={'blue'} />
        <Puma width={58} height={30} fill={'blue'} />
        <Asics width={58} height={30} fill={'blue'} />
      </View>
    </View>
  );
};
