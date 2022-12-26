import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  home: {
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    width: '70%',
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 25,
  },
  button: {
    marginTop: 25,
    marginLeft: 25,
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  search: {
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 2,
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
