import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '600',
    fontSize: 13,
    color: '#313B5D',
    width: '100%',
    marginBottom: 11,
  },
  circle: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#F0EFF2',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    flexDirection: 'row',
    gap: 18,
  },
  selectedCircle: {
    borderColor: '#007bff',
  },
  box: {
    height: 50,
  },
});
