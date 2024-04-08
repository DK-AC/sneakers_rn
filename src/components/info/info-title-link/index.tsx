import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './info-title-link.styles.ts';
import {InfoSneaker} from '../../../constants';

type Props = {
  activeTab: InfoSneaker;
  onTabChange: (value: InfoSneaker) => void;
};

export const InfoTitleLink = ({activeTab, onTabChange}: Props) => {
  const {REVIEWS, DESCRIPTION, DELIVERY} = InfoSneaker;

  const buttonData = [
    {title: DESCRIPTION, value: DESCRIPTION},
    {title: DELIVERY, value: DELIVERY},
    {title: REVIEWS, value: REVIEWS},
  ];

  const handleButtonPress = (buttonValue: InfoSneaker) => {
    onTabChange(buttonValue);
  };

  return (
    <View style={styles.container}>
      {buttonData.map(button => (
        <TouchableOpacity
          key={button.value}
          onPress={() => handleButtonPress(button.value)}
          disabled={activeTab === button.value}>
          <Text
            style={[
              styles.text,
              activeTab === button.value
                ? styles.activeButton
                : styles.inactiveButton,
            ]}>
            {button.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
