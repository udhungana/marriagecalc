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
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-gesture-handler";

//import Assets from "./components/Assets";
//import FirstScreen from "./FirstScreen";

/**
 *
 * This is the first splash scree showing pickbins logout. Timout for showing this screen is set to 2s.
 */
const InsertPoint = ({ navigation }) => {
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

  let screenHeight = Dimensions.get("window").height;

  return (
    <ScrollView>
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
          flex: 1,
          backgroundColor: "#ff6347",
          alignContent: "center",
          marginBottom: 10,
        }}
      >
       
        <Text style={styles.toptext}>Game Setting</Text>
      </View> */}

        <View style={{ flex: 8, marginBottom: 50, marginTop: 50 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              height: 100,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.settingtext}>PLAYER X: </Text>
            </View>
            <View style={{ flex: 1, zIndex: -5 }}>
              <DropDownPicker
                listMode="SCROLLVIEW"
                placeholder="Unseen"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                maxHeight={400}
                containerStyle={styles.Dropdowntext}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput keyboardType="numeric" style={styles.textinput} />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            alignContent: "center",
            marginVertical: (screenHeight * 35) / 100,
          }}
        >
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttontext}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttontext}>Next</Text>
          </TouchableOpacity>
        </View>
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
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
    width: 80,
  },
});
