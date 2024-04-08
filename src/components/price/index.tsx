import {Text} from 'react-native';
import React from 'react';
import {styles} from './price.styles.ts';

type Props = {
  price: number;
};

export const Price = ({price}: Props) => {
  return (
    <Text style={styles.priceAmount}>
      $<Text style={styles.priceValue}>{price}</Text>
    </Text>
  );
};
