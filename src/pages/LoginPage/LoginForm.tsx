import { Formik } from "formik";
import React, { FC } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "../../hooks/hooks";
import { profileLogedToggle } from "../../store/reducers/profileSlice";
import { globalStyles } from "../../utils/globalStyles";
import loginSchema from "./LoginShema";

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        dispatch(profileLogedToggle());
        resetForm();
      }}
    >
      {(props) => (
        <View style={globalStyles.loginWrapper as object}>
          <TextInput
            style={globalStyles.login}
            placeholder={"Email"}
            onChangeText={props.handleChange("email") as any}
            value={props.values.email as string}
          />
          {props.errors.email && props.touched.email ? (
            <Text style={globalStyles.warning as any}>
              {props.errors.email}
            </Text>
          ) : (
            <Text style={globalStyles.succsess as any}></Text>
          )}
          <TextInput
            style={globalStyles.login}
            secureTextEntry={true}
            placeholder={"Password"}
            onChangeText={props.handleChange("password") as any}
            value={props.values.password}
          />
          {props.errors.password && props.touched.password ? (
            <Text style={globalStyles.warning as any}>
              {props.errors.password}
            </Text>
          ) : (
            <Text style={globalStyles.succsess as any}></Text>
          )}
          <TouchableOpacity
            style={globalStyles.button as object}
            onPress={() => {
              props.handleSubmit();
            }}
          >
            <Text style={{ fontWeight: "800", textTransform: "uppercase" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
