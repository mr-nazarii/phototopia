import { colorVariables } from "./colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  loginPage: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  loginWrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  login: {
    marginTop: 8,
    width: 310,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colorVariables.white,
  },
  button: {
    marginTop: 8,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: colorVariables.headerMain,
    padding: 10,
    width: 310,
  },
  warning: {
    position: "relative",
    marginTop: 8,
    padding: 4,
    backgroundColor: "brown",
    width: "100%",
    color: "red",
    fontSize: 10,
  },
  succsess: {
    position: "relative",
    marginTop: 8,
    padding: 4,
    width: "100%",
    fontSize: 10,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colorVariables.backgroundMain,
  },
  container: {
    paddingVertical: 180,
    flex: 1,
    width: "100%",
    backgroundColor: colorVariables.backgroundMain,
    alignItems: "center",
    justifyContent: "center",
  },

  headerNav: {
    backgroundColor: colorVariables.headerMain,
    height: 100,
    padding: 20,
    width: "100%",
  },

  loginImage: { width: 300, height: 200, position: "relative", top: -30 },

  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

  profileWrapper: {
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  profileInfoWrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colorVariables.backgroundMain,

    borderRadius: 20,
  },

  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginHorizontal: 20,
    marginVertical: 20,
  },

  profileSignoutButton: {
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorVariables.backgroundMain,
    borderRadius: 14,
  },

  profilePageText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
  },

  infoWrap: {},
});