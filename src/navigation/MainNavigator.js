
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import MeditateAudio from '../screens/MeditateAudio'
import FocusTimer from '../screens/FocusTimer'
import More from '../screens/More'

const Stack = createStackNavigator()

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name='MeditateAudio'
          component={MeditateAudio}
          options={{ title: 'MeditateAudio Screen' }}
        />
        <Stack.Screen
          name='Focus'
          component={FocusTimer}
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