import React, { useEffect, useState } from "react";
import {
  Switch,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TextInput,
  Platform,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-picker/picker";
import PlayerNames from "./PlayerNames";

//import Assets from "./components/Assets";
//import FirstScreen from "./FirstScreen";

/**
 *
 * This is the first splash scree showing pickbins logout. Timout for showing this screen is set to 2s.
 */
const InsertPoint = ({ navigation, route }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Seen", value: "Seen" },
    { label: "Unseen", value: "Unseen" },
    { label: "Doublee", value: "Doublee" },
    { label: "Foul", value: "Foul" },
    { label: "Winner", value: "Winner" },
  ]);

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

  const [playerData, setPlayerData] = useState([]);
  const selectedChoice = [
    "unseen",
    "unseen",
    "unseen",
    "unseen",
    "unseen",
    "unseen",
    "unseen",
  ];

  var countRound = 1;

  let screenHeight = Dimensions.get("window").height;

  // const playerNames = route.params.playerName;
  useEffect(() => {
    // let pdataarr = [...route.params.pData];
    // // console.log(playerNames);

    // // setPlayerData(route.params.pData);
    // console.log("here");
    //console.log(pdataarr);
    setPlayerData(route.params.pData);
  }, []);

  const selectedNumPlayers = route.params.playerNum;
  console.log("here");
  console.log(playerData);
  // console.log(selectedNumPlayersplusone);

  // const arr = [];
  // for (var i = 1; i <= selectedNumPlayers; i++) {
  //   arr.push(i);
  // }

  const changeRoundStatus = (value, index) => {
    let newArr = [...playerData];
    console.log(newArr);
    newArr[index]["status"] = value;
    setPlayerData(newArr);
  };

  // console.log(selectedChoice);

  const saveButtonPressed = () => {
    navigation.navigate("Scoresheet");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
        minHeight: screenHeight,
      }}
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
      <View>
        <View style={{ flex: 1 }}>
          <Text style={styles.roundNumber}>Round {countRound}: </Text>
        </View>
      </View>

      <ScrollView style={{ flex: 1, marginBottom: 50 }}>
        {playerData.slice(0, selectedNumPlayers).map((data, index) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-start",
            }}
            key={index}
          >
            <View style={{ flex: 1, padding: Platform.OS === "ios" ? 20 : 0 }}>
              <Text style={styles.playernametext}>{data.name} </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Picker
                selectedValue={data.status}
                onValueChange={(itemValue, itemIndex) =>
                  changeRoundStatus(itemValue, index)
                }
                style={styles.onePicker}
                itemStyle={styles.onePickerItem}
              >
                <Picker.Item label="Unseen" value="Unseen" />
                <Picker.Item label="Seen" value="Seen" />
                <Picker.Item label="Winner" value="Winner" />
                <Picker.Item label="Doublee" value="Doublee" />
                <Picker.Item label="Foul" value="Foul" />
              </Picker>
            </View>
            <View style={{ flex: 1, padding: Platform.OS === "ios" ? 20 : 0 }}>
              <TextInput
                keyboardType="numeric"
                style={styles.textinput}
                placeholder="Point"
              />
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "white",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttontext}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => saveButtonPressed()}
        >
          <Text style={styles.buttontext}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default InsertPoint;

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
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
    alignItems: "center",
    padding: 20,
  },
  playernametext: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
    alignItems: "center",
    padding: 20,
    textTransform: "uppercase",
  },
  roundNumber: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    alignItems: "center",
    padding: 20,
  },
  Dropdowntext: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    alignSelf: "center",
    width: 150,
    height: 50,
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
    alignSelf: "center",
    width: 100,
  },
  onePicker: {
    height: 40,
    width: 150,
    alignSelf: "center",
    color: "#ff6347",
  },
  onePickerItem: {
    height: 120,
    color: "#ff6347",
    width: 200,
    alignSelf: "center",
  },
});
