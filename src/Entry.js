import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { auth } from "../constant/constant";

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        navigation.navigate("Home");
      }
    });
    return subscribe; // unsubscribe on unmount
  }, []);

  const handleChangeEmail = (val) => {
    setEmail(val);
  };
  const handleChangePassword = (val) => {
    setPassword(val);
  };
  const handleLoginPress = () => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        navigation.navigate("Home");
      }
    });
  };
  const handleRegisterPress = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((e) => alert(e));
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={email}
          style={styles.textStyle}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={handleChangeEmail}
        />
        <TextInput
          value={password}
          style={styles.textStyle}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={handleChangePassword}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.activateStyle}
          onPress={handleLoginPress}
        >
          <Text style={styles.activeTextStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.activateStyle}
          onPress={handleRegisterPress}
        >
          <Text style={styles.activeTextStyle}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    backgroundColor: "#1167CC",
    width: "80%",
    height: 52,
    marginVertical: 10,
    borderRadius: 26,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  activateStyle: {
    backgroundColor: "#1167CC",
    marginVertical: 5,
    height: 40,
    width: "40%",
    borderRadius: 26,
    alignSelf: "center",
    paddingTop: 10,
  },
  activeTextStyle: {
    color: "#ffff",
    textAlign: "center",
    textAlignVertical: "center",
    height: 52,
  },
});
