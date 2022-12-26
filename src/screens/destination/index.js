import { useState } from 'react'
import { Text, View, TextInput, FlatList } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { styles } from './style'

import searchResult from '../../assets/data/search.js'

const Destination = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <View style={styles.destination}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.icon}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.title}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Destination
