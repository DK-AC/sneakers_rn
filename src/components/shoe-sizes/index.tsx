import React, {useCallback, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './shoe-sizes.styles.ts';
import {changeFavoriteShoeSize, changeSneakerSize} from '../../store/slices/cart';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {SneakersType} from '../../types';

type Props = {
  sneaker: SneakersType;
};

export const ShoeSizes = ({sneaker}: Props) => {
  const dispatch = useAppDispatch();
  const selectSize = useAppSelector(state => state.cart.selectedSize);

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleSizeChange = useCallback(
    (size: number) => {
      setSelectedSize(size);
      dispatch(changeSneakerSize({selectedSize: size}));
      dispatch(changeFavoriteShoeSize({id: sneaker.id, selectedSize: size}));
    },
    [dispatch, sneaker],
  );

  const renderShoeSize = useCallback(
    (size: number) => (
      <TouchableOpacity
        key={size}
        onPress={() => handleSizeChange(size)}
        disabled={size === selectedSize}
        style={[styles.circle, selectedSize === size ? styles.selectedCircle : null]}>
        <Text>{size}</Text>
      </TouchableOpacity>
    ),
    [selectedSize, handleSizeChange],
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
      <ScrollView contentContainerStyle={styles.box} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.circleContainer}>{shoeSizes}</View>
      </ScrollView>
    </View>
  );
};
