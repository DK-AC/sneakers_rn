import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 342,
    borderRadius: 5,
    marginLeft: 54,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomEndRadius: 0,
    borderTopEndRadius: 0,
  },
  inner: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  sizeContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: '50%',
  },
  sizeNumber: {
    color: '#313b5d',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
});
