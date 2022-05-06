import React, { FC } from "react";
import { View, Image } from "react-native";
import { globalStyles } from "../../utils/globalStyles";
import LoginForm from "./LoginForm";

export const LoginPage: FC = () => {
  return (
    <View style={globalStyles.loginPage as object}>
      <Image
        source={require("../../../assets/photo.png")}
        style={globalStyles.loginImage}
      />
      <LoginForm />
    </View>
  );
};

export default LoginPage;
