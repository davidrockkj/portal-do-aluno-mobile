import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    borderBottomWidth: 3,
    borderColor: '#213E98',
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#213E98',
    marginBottom: 5
  },
  input: {
    width: '100%',
    padding: 10,
    color: 'grey',
    fontSize: 16,
    marginBottom: 5,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  inputFocus: {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#213E98',
    borderRadius: 10,
  }
});