import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import TwoBtn from "../TwoBtn";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

const MenuListPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button
            title="Go to Details"
            onPress={() => navigation.navigate("Details")}
          /> */}
      {/* <Button
            title="Go to Brand Name"
            onPress={() => navigation.navigate("Brand")}
          /> */}
      <Button
        title="Search or Post"
        onPress={() => navigation.navigate("Search or Post")}
      />
      {/* <Button
        title="I want to"
        onPress={() => navigation.navigate("I want to")}
      />

      <Button
        title="About Me"
        onPress={() => navigation.navigate("About Me")}
      /> */}

      <Button
        title="My Account"
        onPress={() => navigation.navigate("My Account")}
      />

      <Button
        title="My Preference"
        onPress={() => navigation.navigate("My Preference")}
      />

      <Button
        title="My Listings"
        onPress={() => navigation.navigate("My Listings")}
      />

      <Button
        title="Listings Result"
        onPress={() => navigation.navigate("Listing Result")}
      />

      <Button
        title="Show Carousel"
        onPress={() => navigation.navigate("Show Carousel")}
      />

      <Button
        title="Show Zoom Image"
        onPress={() => navigation.navigate("Show zoom Image")}
      />

      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Login 2" onPress={() => navigation.navigate("Login 2")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Lato-Black",
    fontSize: 100,
    // fontWeight: 'bold',
    color: "#1ed9a6",
  },
  subBg: {
    borderRadius: 10,
  },
  subTitle: {
    paddingRight: 76,
    paddingLeft: 76,
    color: "white",
  },
});

export default MenuListPage;
