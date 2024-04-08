import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './main.styles.ts';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Adidas from '../../../assets/icons/Adidas.svg';
import Nike from '../../../assets/icons/Nike.svg';
import Puma from '../../../assets/icons/Puma.svg';
import Asics from '../../../assets/icons/Asics.svg';
import {Cards} from '../../components/cards';

import {sneakersData} from '../../data';
import {RootStackParamList} from '../../types/navigation.types.ts';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export const MainScreen = ({navigation}: Props) => {
  const [filteredSneakers, setFilteredSneakers] = useState(sneakersData);

  const filterSneakers = (firma: string) => {
    const filtered = sneakersData.filter(sneaker => sneaker.firma === firma);
    setFilteredSneakers(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <TouchableOpacity onPress={() => filterSneakers('nike')}>
          <Nike width={58} height={30} fill={''} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterSneakers('adidas')}>
          <Adidas width={58} height={30} fill={''} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterSneakers('puma')}>
          <Puma width={58} height={30} fill={''} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterSneakers('asics')}>
          <Asics width={58} height={30} fill={''} />
        </TouchableOpacity>
      </View>
      <View style={styles.sideBar}>
        <TouchableOpacity>
          <Text style={styles.sidebarText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sidebarText}>New arrivals</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sidebarText}>Sale</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredSneakers.map(item => {
          return <Cards sneaker={item} key={item.id} navigation={navigation} />;
        })}
      </ScrollView>
    </View>
  );
};
