import { View, Image, Text } from 'react-native'
import { styles } from './style'

const Post = () => {
  return (
    <View style={styles.post}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      <Text style={styles.description}>
        Garmisch-Partenkirchen, Bayern, Deutschland
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.price}> $30 / night</Text>
      </Text>
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  )
}

export default Post
