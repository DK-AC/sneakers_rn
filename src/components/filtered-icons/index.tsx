import {TouchableOpacity, View} from 'react-native';
import Nike from '../../../assets/icons/Nike.svg';
import Adidas from '../../../assets/icons/Adidas.svg';
import Puma from '../../../assets/icons/Puma.svg';
import Asics from '../../../assets/icons/Asics.svg';
import React, {useState} from 'react';
import {styles} from './filtered-icons.styles.ts';

type Props = {
  filterSneakers: (filter: string) => void;
};

export const FilteredIcons = ({filterSneakers}: Props) => {
  const [activeIcon, setActiveIcon] = useState('');

  const icons = [
    {name: 'nike', component: <Nike width={58} height={50} />},
    {name: 'adidas', component: <Adidas width={58} height={50} />},
    {name: 'puma', component: <Puma width={58} height={50} />},
    {name: 'asics', component: <Asics width={58} height={50} />},
  ];

  const handleIconPress = (name: string) => {
    setActiveIcon(name === activeIcon ? '' : name);
    filterSneakers(name);
  };

  return (
    <View style={styles.iconBox}>
      {icons.map(({name, component}) => (
        <TouchableOpacity key={name} onPress={() => handleIconPress(name)}>
          {React.cloneElement(component, {
            fill: name === activeIcon ? 'black' : '#8A8A9D',
          })}
        </TouchableOpacity>
      ))}
    </View>
  );
};
