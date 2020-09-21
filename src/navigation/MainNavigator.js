
import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Meditate from '../screens/Meditate'
import Focus from '../screens/Focus'
import More from '../screens/More'
import Parents from '../screens/Parents'
import HowTo from '../screens/HowTo'
import Legal from '../screens/Legal'

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
        <Stack.Screen
          name='Parents'
          component={Parents}
          options={{ title: 'Parents Screen' }}
        />
        <Stack.Screen
          name='HowTo'
          component={HowTo}
          options={{ title: 'HowTo Screen' }}
        />
        <Stack.Screen
          name='Legal'
          component={Legal}
          options={{ title: 'Legal Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
