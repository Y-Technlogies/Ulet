import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const onPress = () => {
  // My Action
};

const boxItems = [
  { icon: "", qty: 2, bWidth: 0 },
  { icon: "", qty: 6, bWidth: 1 },
  { icon: "", qty: 4, bWidth: 0 },
];

const ListingCard = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Show Detail")}
      >
        <ImageBackground
          source={require("../../assets/images/preference.jpg")}
          style={styles.topBg}
          imageStyle={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        >
          <View
            style={{
              paddingTop: 130,
              paddingLeft: 17,
              paddingRight: 17,
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.toTextBg}>Listing Card</Text>
            </View>
            <Avatar
              activeOpacity={0.2}
              rounded
              size={60}
              source={require("../../assets/images/tiny_logo.png")}
              title="P"
              avatarStyle={{
                borderWidth: 2,
                borderColor: "white",
                borderStyle: "solid",
              }}
            ></Avatar>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 80,
        }}
      >
        <Text style={{ color: "green", fontSize: 16 }}>$1400/months</Text>
        <Text style={{ color: "black", fontSize: 13 }}>Jhon Melton</Text>
      </View>

      <Text style={{ color: "black", fontSize: 13 }}>Your address is here</Text>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        {boxItems.map((item, i) => (
          <View
            style={{
              flex: 2,
              borderTopWidth: 1,
              borderTopColor: "#eaeaea",
              borderLeftColor: "#eaeaea",
              borderRightColor: "#eaeaea",
              borderLeftWidth: item.bWidth,
              borderRightWidth: item.bWidth,
            }}
            key={i}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: 6,
              }}
            >
              <Avatar
                size={15}
                title="BP"
                source={require("../../assets/images/car.png")}
              />
              <Text style={{ textAlign: "center" }}>{item.qty}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

// Style css
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#f0f0f0",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  toTextBg: {
    borderRadius: 2,
    color: "white",
    fontSize: 15,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 4,
    paddingBottom: 4,
    borderWidth: 1,
    borderColor: "#fff",
  },
  topBg: {
    resizeMode: "cover",
    width: "100%",
    height: 170,
  },
  profilePicStyle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
    marginTop: 50,
  },
  bodyRow: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 25,
    marginRight: 20,
  },
});

export default ListingCard;
