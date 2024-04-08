import React, {useCallback} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './shoe-sizes.styles.ts';

export const ShoeSizes = () => {
  const renderShoeSize = useCallback(
    (size: number) => (
      <TouchableOpacity key={size} onPress={() => {}}>
        <View style={styles.circle}>
          <Text>{size}</Text>
        </View>
      </TouchableOpacity>
    ),
    [],
  );

  const renderShoeSizes = useCallback(() => {
    const sizes = [];
    for (let i = 39; i <= 45; i++) {
      sizes.push(renderShoeSize(i));
    }
    return sizes;
  }, [renderShoeSize]);

  const shoeSizes = renderShoeSizes();

  return (
    <View>
      <Text style={styles.text}>Select size</Text>
      <ScrollView
        contentContainerStyle={styles.box}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.circleContainer}>{shoeSizes}</View>
      </ScrollView>
    </View>
  );
};
