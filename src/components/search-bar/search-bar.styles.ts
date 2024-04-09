import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    padding: 20,
    paddingBottom: 0,
  },
  input: {
    borderRadius: 6,
    backgroundColor: 'white',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 13,
    fontWeight: '600',
    color: '#8A8A9D',
    paddingHorizontal: 40,
    paddingVertical: 15,
    paddingRight: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 30,
    zIndex: 3,
    top: 32,
  },
  closeIcon: {
    position: 'absolute',
    right: 30,
    zIndex: 3,
    top: 32,
  },
});
