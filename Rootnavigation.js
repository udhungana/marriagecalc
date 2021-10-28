import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FirstScreen from "./FirstScreen";
import GameSettings from "./GameSettings";
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
  <RootStack.Navigator initialRouteName="FirstScreen">
    <RootStack.Screen
      name="FirstScreen"
      component={FirstScreen}
      options={{ headerLeft: null, headerShown: false }}
    />
    <RootStack.Screen
      name="Settings"
      component={GameSettings}
      options={{ headerShown: true }}
    />
    {/*
    <RootStack.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{ title: "Create New Account" }}
    />
    <RootStack.Screen
      name="DashScreen"
      component={DashScreen}
      options={{ headerLeft: null, headerShown: false }}
    />
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
