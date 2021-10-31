import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FirstScreen from "./FirstScreen";
import GameSettings from "./GameSettings";
import PlayerNames from "./PlayerNames";
import InsertPoint from "./InsertPoint";
// import SignUpScreen from "./SignUpScreen";
// import DashScreen from "./DashScreen";
// import Dashboard from "./Dashboard";
// import Pickup from "./Pickup";
// import Support from "./Support";
// import Account from "./Account";
// import DriverScreen from "./DriverScreen";
// import Logout from "./Logout";

/**
 * create stack navigator to navigate between the screen in the app
 */

const RootStack = createStackNavigator();

/**
 * {add each of the screen inside stack navigator component}
 */

const Rootnavigation = ({ navigation }) => (
  <RootStack.Navigator
    screenOptions={{
      title: "Game Setting",
      headerMode: "screen",
      headerStyle: {
        backgroundColor: "#ff6347",
      },
      headerTintColor: "#fff",
      headerBackTitleVisible: false,
      height: 80,
      headerMode: "screen",
      headerTitleAlign: "center",
    }}
  >
    <RootStack.Screen
      name="FirstScreen"
      component={FirstScreen}
      options={{ headerShown: true, title: "Marriage Calculator" }}
    />
    <RootStack.Screen
      name="GameSettings"
      component={GameSettings}
      options={{
        title: "Game Setting",
      }}
    />

    <RootStack.Screen
      name="PlayerNames"
      component={PlayerNames}
      options={{
        title: "Enter Player Names",
      }}
    />

    <RootStack.Screen
      name="InsertPoint"
      component={InsertPoint}
      options={{ title: "Insert Points" }}
    />
    {/*
    <RootStack.Screen
      name="Pickup"
      component={Pickup}
      options={{ headerLeft: null, headerShown: false }}
    />
    <RootStack.Screen
      name="DriverScreen"
      component={DriverScreen}
      options={{ headerLeft: null, headerShown: false }}
    />
    <RootStack.Screen
      name="Logout"
      component={Logout}
      options={{ headerLeft: null, headerShown: false }}
    />
    <RootStack.Screen name="Support" component={Support} /> */}
  </RootStack.Navigator>
);

export default Rootnavigation;
