import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    fontFamily: 'OpenSans-Bold',
    color: '#313B5D',
    textTransform: 'uppercase',
  },
});
