import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: 50,
    alignItems: 'flex-end',
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
    height: 50,
    justifyContent: 'flex-end',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    left: -100,
  },
  logo: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
});