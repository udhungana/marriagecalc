import React, { useEffect } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
//import Assets from "./components/Assets";
//import GameSettings from "./GameSettings";

/**
 *
 * This is the first splash scree showing pickbins logout. Timout for showing this screen is set to 2s.
 */
const FirstScreen = ({ navigation }) => {
  const startGamePressed = () => {
    navigation.navigate("GameSettings");
  };
  const continueGamePressed = () => {
    //navigation.navigate("GameSettings");
  };
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
      {/* <View
        style={{
          flex: 0.8,
          backgroundColor: "#ff6347",
          alignContent: "center",
        }}
      >
        <Text style={styles.toptext}>Marriage Calculator</Text>
      </View> */}
      <View
        style={{
          flex: 7,
          backgroundColor: "white",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => startGamePressed()}
          >
            <Text style={styles.buttontext}>Start Game</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttontext}>Continue Game</Text>
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
    backgroundColor: "white",
  },
  toptext: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "navy",
    padding: 20,
  },
  bottomtext: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
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
