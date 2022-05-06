import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  RefreshControl,
} from "react-native";
import { colorVariables } from "../../utils/colors";
import { globalStyles } from "../../utils/globalStyles";
import FeedPage from "../FeedPage/FeedPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

const HeaderNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = "ellipse";

          if (route.name === "FEEDS") {
            iconName = focused ? "camera" : "camera-outline";
          } else if (route.name === "PROFILE") {
            iconName = focused ? "md-person-sharp" : "md-person-outline";
          }

          return <Ionicons name={iconName as any} size={23} color={color} />;
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          backgroundColor: colorVariables.backgroundMain,
        },

        tabBarActiveTintColor: colorVariables.white,
        tabBarInactiveTintColor: colorVariables.headerMain,
        tabBarShowIcon: true,
      })}
    >
      <Tab.Screen name="FEEDS" component={FeedPage} />
      <Tab.Screen name="PROFILE" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default HeaderNav;
