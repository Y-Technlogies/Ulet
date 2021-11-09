import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";

const items = [
  { title: "For Sale", icon: require("../../assets/images/sale.png") },
  { title: "Real Estate", icon: require("../../assets/images/realEstate.png") },
  { title: "For Rent", icon: require("../../assets/images/rent.png") },
  {
    title: "Categories",
    icon: require("../../assets/images/categorise.png"),
  },
];

export class MenuItems extends Component {
  render() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image
              source={item.icon}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              {item.title}
            </Text>
          </View>
        ))}
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default MenuItems;
