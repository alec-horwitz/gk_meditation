
import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Meditate from '../screens/Meditate'
import Focus from '../screens/Focus'
import More from '../screens/More'

const Stack = createStackNavigator()

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false
  }}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name='Meditate'
          component={Meditate}
          options={{ title: 'Meditate Screen' }}
        />
        <Stack.Screen
          name='Focus'
          component={Focus}
          options={{ title: 'Focus Screen' }}
        />
        <Stack.Screen
          name='More'
          component={More}
          options={{ title: 'More Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
