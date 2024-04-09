import {ScrollView, View} from 'react-native';
import {styles} from './main.styles.ts';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Cards} from '../../components/cards';
import {sneakersData} from '../../data';
import {RootStackParamList} from '../../types/navigation.types.ts';
import {SearchBar} from '../../components/search-bar';
import {FilteredIcons} from '../../components/filtered-icons';
import {SidebarText} from '../../components/sidebar-text';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export const MainScreen = ({navigation}: Props) => {
  const [filteredSneakers, setFilteredSneakers] = useState(sneakersData);
  const [searchText, onChangeSearchText] = useState('');

  const filterSneakers = (firma: string) => {
    const filtered = sneakersData.filter(sneaker => sneaker.firma === firma);
    setFilteredSneakers(filtered);
  };

  const filterPopularSneakers = () => {
    const sorted = [...filteredSneakers].sort((a, b) => b.rating - a.rating);
    setFilteredSneakers(sorted);
  };

  const searchSneakers = () => {
    const filtered = sneakersData.filter(sneaker => sneaker.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredSneakers(filtered);
  };

  const clearFilterClick = () => {
    setFilteredSneakers(sneakersData);
    onChangeSearchText('');
  };

  return (
    <>
      <SearchBar
        text={searchText}
        onChangeText={onChangeSearchText}
        clearSearchText={clearFilterClick}
        onSubmit={searchSneakers}
      />
      <FilteredIcons filterSneakers={filterSneakers} clearFilterClick={clearFilterClick} />
      <View style={styles.container}>
        <SidebarText filterPopular={filterPopularSneakers} />
        <ScrollView>
          {filteredSneakers.map(item => {
            return <Cards sneaker={item} key={item.id} navigation={navigation} />;
          })}
        </ScrollView>
      </View>
    </>
  );
};
