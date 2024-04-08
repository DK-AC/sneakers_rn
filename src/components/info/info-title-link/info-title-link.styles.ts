import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 25,
  },
  activeButton: {
    color: '#313B5D',
  },
  inactiveButton: {
    color: '#8A8A9D',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#8A8A9D',
    textTransform: 'uppercase',
  },
});
