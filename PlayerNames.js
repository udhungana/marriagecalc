import React, { useEffect, useState } from "react";
import {
  Switch,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-gesture-handler";
//import Assets from "./components/Assets";
//import FirstScreen from "./FirstScreen";

/**
 *
 * This is the first splash scree showing pickbins logout. Timout for showing this screen is set to 2s.
 */
const PlayerNames = ({ navigation, route }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  //const [playerNames, setPlayerNames] = useState([]);

  const [isEnabledFoul, setIsEnabledFoul] = useState(false);
  const toggleSwitchFoul = () =>
    setIsEnabledFoul((previousState) => !previousState);

  const [isEnabledDoublee, setIsEnabledDoublee] = useState(false);
  const toggleSwitchDoublee = () =>
    setIsEnabledDoublee((previousState) => !previousState);
  // <View style={styles.container}>
  //   <Text>FirstScreen</Text>
  // </View>;

  // useEffect(() => {
  //   console.log("once");
  //   setTimeout(() => {
  //     navigation.navigate("SignInScreen");
  //   }, 2000);
  // }, []);
  // const { paramKey } = route.params;
  // console.log(paramKey);
  // const arr = [...Array(paramKey).keys()];
  // console.log(arr);

  // [...Array().keys()];
  var selectedNumPlayers = route.params.paramKey;

  const arr = [];
  for (var i = 1; i <= selectedNumPlayers; i++) {
    arr.push(i);
  }

  const playerNames = [
    "player0",
    "player1",
    "player2",
    "player3",
    "player4",
    "player5",
    "player6",
  ];
  const addNames = (value, index) => {
    playerNames[index] = value;
  };

  const nextButtonPressed = () => {
    console.log(playerNames);
    navigation.navigate("InsertPoint", {
      playerName: playerNames,
      playerNum: selectedNumPlayers,
    });
  };

  return (
    <ScrollView
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
          flex: 1,
          backgroundColor: "#ff6347",
          alignContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={styles.toptext}>Game Setting</Text>
      </View> */}
      <View style={{ flex: 5, marginBottom: 10, marginTop: 50 }}>
        {arr.map((elementInArray, index) => (
          <View key={index + 1} style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.settingtext}>
                PLAYER {"   "}
                {index + 1}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                keyboardType="default"
                style={styles.textinput}
                onChangeText={(text) => addNames(text, index + 1)}
              />
            </View>
          </View>
        ))}
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "white",
          alignItems: "center",
          alignContent: "center",
          marginTop: 80,
        }}
      >
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttontext}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => nextButtonPressed()}
        >
          <Text style={styles.buttontext}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default PlayerNames;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    backgroundColor: "white",
  },
  toptext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    padding: 20,
  },
  settingtext: {
    fontSize: 14,
    flex: 3,
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
    alignItems: "center",
    padding: 20,
  },
  Dropdowntext: {
    flex: 2,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    alignItems: "center",
    padding: 20,
    height: 70,
  },
  buttons: {
    fontSize: 20,
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#E1D9D1",
    padding: 20,
    margin: 10,
    width: 200,
    height: 70,
    alignItems: "center",
    borderRadius: 10,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
