import {View} from 'react-native';
import React from 'react';
import {Description} from './description';
import {styles} from './info.styles.ts';
import {InfoTitleLink} from './info-title-link';

type Props = {
  description: string;
};

export const Info = ({description}: Props) => {
  return (
    <View style={styles.container}>
      <InfoTitleLink />
      <Description description={description} />
    </View>
  );
};
