import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  inner: {
    display: 'flex',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
  input: {
    width: '100%',
    backgroundColor: 'white',
    height: 47,
    padding: 10,
    borderRadius: 6,
  },
  iconBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 112,
    paddingHorizontal: 20,
  },
});
