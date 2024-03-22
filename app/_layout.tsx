import { FontAwesome6, Feather } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { Image, Text } from 'react-native'
 
const Layout = () => {
  return (
   <Stack screenOptions={{headerShadowVisible: false}}>
    <Stack.Screen 
    name="(tabs)/index"
    options={{
      headerLeft: () => (
        <FontAwesome6 name="user-circle" size={24} color="black" />
      ),
      headerRight: () => 
        <Feather name="settings" size={24} color="black" /> ,
      headerTitle: () => (
        <Image
        source={require('assets/rrg-logo.png')}
        style={{ width: 30, height: 30, resizeMode: 'contain'}}
      />
      ),
      headerTitleAlign: 'center'
    }}/>
   <Stack.Screen 
     name="details"
     options={{ 
     headerTitle: 'Details', 
     headerBackTitle: 'Back',
     headerTitleAlign: 'center'
  }}
/>
 
   </Stack>
  )
}

export default Layout
 