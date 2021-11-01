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
  KeyboardAvoidingView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-gesture-handler";

//import Assets from "./components/Assets";
//import FirstScreen from "./FirstScreen";

/**
 *
 * This is the first splash scree showing pickbins logout. Timout for showing this screen is set to 2s.
 */
const Scoresheet = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
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
  const nextButtonPressed = () => {
    navigation.navigate("InsertPoint");
  };

  var array = [
    {
      Player: "Utsav",
      point: ["aad", "bbd", "ccd", "eed"],
    },
    {
      Player: "Himal",
      point: ["aaf", "bbf", "ccf", "eef"],
    },
    {
      Player: "Bipul",
      point: ["aag", "bbg", "ccg", "eeg"],
    },
    {
      Player: "Suyash",
      point: ["aam", "bbm", "ccm", "eem"],
    },
    {
      Player: "Pujan",
      point: ["aao", "bbo", "cco", "eeo"],
    },
    {
      Player: "Bipul",
      point: ["aag", "bbg", "ccg", "eeg"],
    },
    {
      Player: "Suyash",
      point: ["aam", "bbm", "ccm", "eem"],
    },
    {
      Player: "Pujan",
      point: ["aao", "bbo", "cco", "eeo"],
    },
  ];

  let screenHeight = Dimensions.get("window").height;

  return (
    <ScrollView
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
      contentContainerStyle={{
        flexGrow: 1,
        minHeight: screenHeight,
        padding: 10,
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
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.subTotalText}> POINTS TABLE </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          flexGrow: 1,
          minHeight: (screenHeight * 40) / 100,
        }}
        horizontal={true}
      >
        {array.map((datum, index) => (
          // This will render a row for each data element.
          <ScrollView
            key={index}
            contentContainerStyle={{
              alignSelf: "center",
              flexDirection: "row",
              flexGrow: 1,
              width: 80,
            }}
          >
            <Text style={{ color: "black" }}>{datum.Player}</Text>
            {/* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
            {/* <View style={{ flex: 1, alignSelf: "stretch" }} />
            <View style={{ flex: 1, alignSelf: "stretch" }} />
            <View style={{ flex: 1, alignSelf: "stretch" }} />
            <View style={{ flex: 1, alignSelf: "stretch" }} /> */}
          </ScrollView>
        ))}
      </ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "white",
          alignItems: "center",
          alignContent: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttontext}>Edit Current</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => nextButtonPressed()}
        >
          <Text style={styles.buttontext}>Next Round</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Scoresheet;

const styles = StyleSheet.create({
  container: {
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
  subTotalText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
    fontSize: 14,
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
    fontSize: 16,
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
