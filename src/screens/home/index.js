import { View, Text, ImageBackground, Pressable } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { styles } from './style'

import background from '../../assets/images/background.jpg'

const Home = () => {
  return (
    <View style={styles.home}>
      <Pressable style={styles.search} onPress={() => {}}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground style={styles.image} source={background}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default Home
