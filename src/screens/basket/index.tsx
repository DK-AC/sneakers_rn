import {ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation.types.ts';
import {useAppSelector} from '../../store/hooks';
import {Cards} from '../../components/cards';
import {styles} from './basket.styles.ts';

type Props = NativeStackScreenProps<RootStackParamList, 'Basket'>;

export const BasketScreen = (props: Props) => {
  const {navigation} = props;

  const selectedItems = useAppSelector(state => state.cart.items);

  useEffect(() => {
    if (selectedItems.length === 0) {
      navigation.push('Main');
    }
  }, [navigation, selectedItems]);

  return (
    <ScrollView style={styles.container}>
      {selectedItems.map(item => {
        return (
          <Cards
            favoriteScreen={true}
            customStyles={styles.selectedItems}
            sneaker={item}
            key={item.id}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};
