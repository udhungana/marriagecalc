import React, { useEffect } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import Assets from "./components/Assets";
import FirstScreen from "./FirstScreen";

/**
 *
 * This is the first splash scree showing pickbins logout. Timout for showing this screen is set to 2s.
 */
const GameSettings = ({ navigation }) => {
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
          backgroundColor: "#ff6347",
          alignContent: "center",
        }}
      >
        {/* <Text style={styles.toptext}>Marriage Calculator</Text> */}
      </View>
      <View
        style={{
          flex: 7,
          backgroundColor: "white",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttontext}>Start Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttontext}>Continue Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default GameSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    marginTop: 40,
    backgroundColor: "white",
  },
  toptext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    padding: 20,
  },
  bottomtext: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    padding: 30,
  },
  buttons: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#E1D9D1",
    padding: 20,
    margin: 20,
    width: 250,
    alignItems: "center",
    borderRadius: 10,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
