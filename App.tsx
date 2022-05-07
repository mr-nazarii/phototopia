import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import HeaderNav from "./src/pages/HeaderNav/HeaderNav";
import LoginPage from "./src/pages/LoginPage/LoginPage";
import { globalStyles } from "./src/utils/globalStyles";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { colorVariables } from "./src/utils/colors";
import { useAppSelector } from "./src/hooks/hooks";
import { store } from "./src/store/store";

function App() {
  const { logedIn } = useAppSelector((state) => state.profile);

  return (
    <Provider store={store}>
      <SafeAreaView
        style={{ backgroundColor: colorVariables.backgroundMain }}
        edges={["top"]}
      />

      <NavigationContainer>
        <View style={globalStyles.mainContainer}>
          {!logedIn ? (
            <View style={globalStyles.container}>
              <LoginPage />
            </View>
          ) : (
            <HeaderNav />
          )}
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

export default function AppWrapper() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SafeAreaProvider>
  );
}
