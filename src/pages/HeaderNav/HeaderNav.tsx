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

const Tab = createMaterialTopTabNavigator();

const HeaderNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: colorVariables.backgroundMain },
        tabBarActiveTintColor: colorVariables.white,
        tabBarInactiveTintColor: colorVariables.headerMain,
      }}
    >
      <Tab.Screen name="FEEDS" component={FeedPage} />
      <Tab.Screen name="PROFILE" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default HeaderNav;
