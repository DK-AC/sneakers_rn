import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './sidebar-text.styles.ts';

type Props = {};

const sidebarItems = [{text: 'Popular'}, {text: 'New arrivals'}, {text: 'Sale'}];

export const SidebarText = ({}: Props) => {
  return (
    <View style={styles.sideBar}>
      {sidebarItems.map((item, index) => (
        <TouchableOpacity key={index}>
          <Text style={styles.sidebarText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
