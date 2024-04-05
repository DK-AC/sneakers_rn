import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './main.styles.ts';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Adidas from '../../../assets/icons/Adidas.svg';
import Nike from '../../../assets/icons/Nike.svg';
import Puma from '../../../assets/icons/Puma.svg';
import Asics from '../../../assets/icons/Asics.svg';
import {Cards} from '../../components/cards';
import nikeMain from '../../../assets/images/nikeMain.png';
import nikeWhite from '../../../assets/images/nikeAirMaxWhite.png';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export const MainScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Nike width={58} height={30} fill={''} />
        <Adidas width={58} height={30} fill={''} />
        <Puma width={58} height={30} fill={''} />
        <Asics width={58} height={30} fill={''} />
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
        <Cards img={nikeMain} title={'Nike Air Max Plus |||'} rating={4} />
        <Cards img={nikeMain} title={'Nike Air Max Plus |||'} rating={4} />
        <Cards img={nikeWhite} title={'Nike Air Max'} rating={5} />
        <Cards img={nikeWhite} title={'Nike Air Max'} rating={5} />
        <Cards img={nikeMain} title={'Nike Air Max Plus |||'} rating={4} />
        <Cards img={nikeMain} title={'Nike Air Max Plus |||'} rating={4} />
        <Cards img={nikeMain} title={'Nike Air Max Plus |||'} rating={4} />
        <Cards img={nikeWhite} title={'Nike Air Max'} rating={5} />
        <Cards img={nikeWhite} title={'Nike Air Max'} rating={5} />
      </ScrollView>
    </View>
  );
};
