import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './search-bar.styles.ts';
import SearchIcon from '../../../assets/icons/Search.svg';
import CloseIcon from '../../../assets/icons/Close.svg';
import {useThrottle} from '../../hooks/useThrottle.ts';

type Props = {
  text: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  clearSearchText: () => void;
};

export const SearchBar = ({text, onChangeText, onSubmit, clearSearchText}: Props) => {
  const throttledText = useThrottle(text, 50);

  const handleTextChange = (text: string) => {
    onChangeText(text);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <View style={styles.container}>
      <SearchIcon style={styles.searchIcon} width={24} height={24} />
      <TextInput
        value={throttledText}
        onChangeText={handleTextChange}
        onEndEditing={handleSubmit}
        style={styles.input}
        placeholder={'Search...'}
      />
      {text && (
        <TouchableOpacity style={styles.closeIcon} onPress={clearSearchText}>
          <CloseIcon width={24} height={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};
