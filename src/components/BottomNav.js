
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import MeditateAudio from "../screens/MeditateAudio";
import Home from "../screens/Home";
import Parents from "../screens/Parents";

const Tab = createBottomTabNavigator();

const BottomNav = () => {

  return (
    
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
          component={MeditateAudio}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Focus"
          component={MeditateAudio}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="change"
          component={Parents}
          options={{ tabBarVisible: false }}
        />
      </Tab.Navigator>
  );
};

export default BottomNav;
