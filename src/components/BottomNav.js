import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import MeditateTimeLine from "../screens/MeditateTimeLine";
import MeditateAudio from "../screens/MeditateAudio";
import Settings from "../screens/Settings";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const BottomNav = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarButton: ["Home"].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Meditate"
          component={MeditateTimeLine}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Bed Time"
          component={MeditateAudio}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="change"
          component={Settings}
          options={{ tabBarVisible: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
