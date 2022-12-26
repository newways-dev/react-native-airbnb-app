import { SafeAreaView, FlatList } from 'react-native'
import Home from './src/screens/home'
import Post from './src/components/post'

import data from './src/assets/data/data.js'

const post1 = data[0]

const App = () => {
  return (
    <SafeAreaView>
      <Post post={post1} />
    </SafeAreaView>
  )
}

export default App
