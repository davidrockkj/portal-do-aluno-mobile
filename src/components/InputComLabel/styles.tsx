import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black'
    width: '100%',
    marginBottom: 10
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#213E98',
  },
  input: {
    width: '100%',
    borderWidth: 3,
    borderColor: '#213E98',
    borderRadius: 10,
    padding: 10,
    color: 'grey',
    fontSize: 16
  },
  inputFocus: {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#213E98'
  }
});