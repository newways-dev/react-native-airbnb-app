import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './style'

const Guests = () => {
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.age}>Adults</Text>
          <Text style={styles.ageDescription}>Ages 13 or above</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={styles.icon}>-</Text>
          </Pressable>
          <Text style={styles.value}>{adults}</Text>
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={styles.icon}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.age}>Children</Text>
          <Text style={styles.ageDescription}>Ages 2 - 12</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}>
            <Text style={styles.icon}>-</Text>
          </Pressable>
          <Text style={styles.value}>{children}</Text>
          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}>
            <Text style={styles.icon}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.age}>Infants</Text>
          <Text style={styles.ageDescription}>Under 2</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={styles.icon}>-</Text>
          </Pressable>
          <Text style={styles.value}>{infants}</Text>
          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text style={styles.icon}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Guests
