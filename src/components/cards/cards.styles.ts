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
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
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
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
    color: '#8A8A9D',
  },
  priceAmount: {
    fontFamily: 'OpenSans-Bold',
    color: '#3A63E0',
    fontSize: 18,
  },
  priceValue: {
    color: '#313b5d',
    fontSize: 23,
    fontFamily: 'OpenSans-Bold',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
});
