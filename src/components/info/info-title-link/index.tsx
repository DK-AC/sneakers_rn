import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './info-title-link.styles.ts';

export const InfoTitleLink = () => {
  const buttonData = [
    {title: 'Description', value: 'Description'},
    {title: 'Delivery', value: 'Delivery'},
    {title: 'Reviews', value: 'Reviews'},
  ];

  const [activeButton, setActiveButton] = useState('Description');

  const handleButtonPress = (buttonValue: string) => {
    setActiveButton(buttonValue);
  };

  return (
    <View style={styles.container}>
      {buttonData.map(button => (
        <TouchableOpacity
          key={button.value}
          onPress={() => handleButtonPress(button.value)}
          disabled={activeButton === button.value}>
          <Text
            style={[
              styles.text,
              activeButton === button.value
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
