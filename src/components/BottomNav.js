import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../context/ThemeStore";
import MeditateTimeLine from "../screens/MeditateTimeLine";
import MeditateAudio from "../screens/MeditateAudio";
import Settings from "../screens/Settings";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const { theme } = useContext(ThemeContext);

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
          name="Settings"
          component={Settings}
          options={{ tabBarVisible: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
