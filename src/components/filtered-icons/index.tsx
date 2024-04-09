import {TouchableOpacity, View} from 'react-native';
import Nike from '../../../assets/icons/Nike.svg';
import Adidas from '../../../assets/icons/Adidas.svg';
import Puma from '../../../assets/icons/Puma.svg';
import Asics from '../../../assets/icons/Asics.svg';
import React from 'react';
import {styles} from './filtered-icons.styles.ts';

type Props = {
  filterSneakers: (filter: string) => void;
};

const icons = [
  {name: 'nike', component: <Nike width={58} height={30} />},
  {name: 'adidas', component: <Adidas width={58} height={30} />},
  {name: 'puma', component: <Puma width={58} height={30} />},
  {name: 'asics', component: <Asics width={58} height={30} />},
];

export const FilteredIcons = ({filterSneakers}: Props) => {
  return (
    <View style={styles.iconBox}>
      {icons.map(({name, component}) => (
        <TouchableOpacity key={name} onPress={() => filterSneakers(name)}>
          {component}
        </TouchableOpacity>
      ))}
    </View>
  );
};
