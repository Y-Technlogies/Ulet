import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import TwoBtn from "../TwoBtn";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

const Brand = (props) => {
  const [bName, setBName] = React.useState("ULET");
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Search or Post");
    }, 8000);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Search or Post")}
      >
        <Text style={styles.titleText}>{bName}</Text>
      </TouchableOpacity>

      <LinearGradient
        // Button Linear Gradient
        colors={["#1ed9a6", "#335799"]}
        style={styles.subBg}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.9 }}
      >
        <Text style={styles.subTitle}>BE INCLUDED</Text>
      </LinearGradient>
      {/* <TwoBtn navigation={props.navigation} /> */}
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

export default Brand;
