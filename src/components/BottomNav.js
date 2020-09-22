import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MeditateTimeLine from '../screens/MeditateTimeLine';
import AudioContainer from '../screens/AudioContainer';
import Settings from '../screens/Settings';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarButton: ['Home'].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Meditate"
          component={MeditateTimeLine}
          options={{tabBarVisible: false}}
        />
        <Tab.Screen
          name="Bed Time"
          component={AudioContainer}
          options={{tabBarVisible: false}}
          initialParams={{test: 'focus'}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{tabBarVisible: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
