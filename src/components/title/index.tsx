import {Text} from 'react-native';
import React from 'react';
import {styles} from './title.styles.ts';

type Props = {
  title: string;
};

export const Title = ({title}: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};
