import {Button, Text, View} from 'react-native';
import {styles} from './card.styles.ts';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Card'>;

export const CardScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="" onPress={() => navigation.navigate('Card')} />
    </View>
  );
};
