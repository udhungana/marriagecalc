import React, { useEffect } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import Assets from "./components/Assets";

/**
 *
 * This is the first splash scree showing pickbins logout. Timout for showing this screen is set to 2s.
 */
const FirstScreen = ({ navigation }) => {
  // <View style={styles.container}>
  //   <Text>FirstScreen</Text>
  // </View>;

  // useEffect(() => {
  //   console.log("once");
  //   setTimeout(() => {
  //     navigation.navigate("SignInScreen");
  //   }, 2000);
  // }, []);

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      {/* <View>
        <Assets />
      </View> */}
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          alignContent: "center",
        }}
      >
        <Text style={styles.toptext}>Marriage Calculator</Text>
      </View>
      <View style={{ flex: 6, backgroundColor: "white", alignItems: "center" }}>
        <TouchableOpacity style={styles.bottomtext}>
          <Text>Start Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomtext}>
          <Text>Continue Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    marginTop: 40,
  },
  toptext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    padding: 30,
  },
  bottomtext: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    padding: 30,
  },
});
