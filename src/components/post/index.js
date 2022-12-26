import { View, Image, Text } from 'react-native'
import { styles } from './style'

const Post = ({ post }) => {
  return (
    <View style={styles.post}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type} {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.price}> ${post.newPrice} / night</Text>
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  )
}

export default Post
