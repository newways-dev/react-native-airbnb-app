import { View, FlatList } from 'react-native'
import Post from '../../components/post'

import data from '../../assets/data/data.js'

const Result = () => {
  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => <Post post={item} />} />
    </View>
  )
}

export default Result
