import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 330,
    borderRadius: 5,
    marginLeft: 54,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  img: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    top: 0,
  },
});
