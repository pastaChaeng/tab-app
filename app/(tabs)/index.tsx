import { View, Text } from 'react-native' 
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
 <Link href={'/details'}>Pending Page</Link>
    </View>
  )
}

export default Page