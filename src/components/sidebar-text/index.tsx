import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {styles} from './sidebar-text.styles.ts';

type Props = {
  filterPopular: () => void;
};

export const SidebarText = ({filterPopular}: Props) => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonPress = (buttonName: string) => {
    setActiveButton(buttonName);
    filterPopular();
  };

  return (
    <View style={styles.sideBar}>
      <TouchableOpacity onPress={() => handleButtonPress('Popular')}>
        <Text style={[styles.sidebarText, activeButton === 'Popular' && styles.activeButton]}>Popular</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('New arrivals')}>
        <Text style={[styles.sidebarText, activeButton === 'New arrivals' && styles.activeButton]}>New arrivals</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('Sale')}>
        <Text style={[styles.sidebarText, activeButton === 'Sale' && styles.activeButton]}>Sale</Text>
      </TouchableOpacity>
    </View>
  );
};
