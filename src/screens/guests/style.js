import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  age: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  ageDescription: {
    color: '#8d8d8d',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#8d8d8d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  icon: {
    fontSize: 20,
    color: '#8d8d8d',
  },
})
