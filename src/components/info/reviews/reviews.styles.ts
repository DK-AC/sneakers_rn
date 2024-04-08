import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: '#F0EFF2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    gap: 2,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
    color: '#313B5D',
    marginBottom: 5,
  },
  comment: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'OpenSans-Regular',
    marginTop: 3,
  },
  button: {
    color: '#007bff',
    fontSize: 14,
  },
});
