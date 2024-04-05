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
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  sideBar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    transform: [{rotate: '-90deg'}],
    position: 'absolute',
    bottom: 350,
    left: -150,
    zIndex: 1,
  },
  sidebarText: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    color: '#313B5D',
    textTransform: 'uppercase',
  },
});
