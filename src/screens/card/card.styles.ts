import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  cardBox: {
    height: 342,
    borderRadius: 20,
    display: 'flex',
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
  },
  inner: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  box: {
    display: 'flex',
    gap: 10,
  },
  img: {
    flex: 1,
    marginTop: -70,
    maxWidth: 280,
    objectFit: 'contain',
  },
});
