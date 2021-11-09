import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const onPress = () => {
  // My Action
};

const SignInUp = (props) => {
  return (
    <View style={styles.bodyStyle}>
      <StatusBar backgroundColor="blue" />
      <Text style={styles.titleText}>ULET</Text>

      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => props.navigation.navigate("SignUp")}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.btnStyle} onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity> */}
    </View>
  );
};

// Style css
const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "Lato-Black",
    fontSize: 100,
    color: "#1ed9a6",
    marginBottom: 50,
  },
  btnStyle: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#1ed9a6",
    alignItems: "center",
    padding: 10,
    width: 200,
    marginBottom: 10,
  },
  btnText: {
    fontFamily: "Lato-Black",
    fontSize: 14,
    color: "#1ed9a6",
  },
  bottomText: {
    fontFamily: "Lato-Black",
    color: "#1ed9a6",
    fontWeight: "bold",
    marginTop: 50,
  },
});

export default SignInUp;
