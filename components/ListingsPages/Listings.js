import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import ListingCard from "./ListingCard";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";

const onPress = () => {
  // My Action
};

const listingInfos = [
  {
    name: "Jhon Moris",
    bgImg: "../../assets/images/preference.jpg",
    pImg: "../../assets/images/tiny_logo.png",
    price: "$1300/months",
    address: "Your address here",
    car: "2",
  },
  {
    name: "Jhon Moris",
    bgImg: "../../assets/images/preference.jpg",
    pImg: "../../assets/images/tiny_logo.png",
    price: "$1300/months",
    address: "Your address here",
    car: "2",
  },
  {
    name: "Jhon Moris",
    bgImg: "../../assets/images/preference.jpg",
    pImg: "../../assets/images/tiny_logo.png",
    price: "$1300/months",
    address: "Your address here",
    car: "2",
  },
  {
    name: "Jhon Moris",
    bgImg: "../../assets/images/preference.jpg",
    pImg: "../../assets/images/tiny_logo.png",
    price: "$1300/months",
    address: "Your address here",
    car: "2",
  },
  {
    name: "Jhon Moris",
    bgImg: "../../assets/images/preference.jpg",
    pImg: "../../assets/images/tiny_logo.png",
    price: "$1300/months",
    address: "Your address here",
    car: "2",
  },
];

const Separator = () => <View style={styles.separator} />;

const Listings = ({ navigation }) => {
  const handleCity = () => {
    //
  };

  return (
    <View style={styles.bodyStyle}>
      <View>
        <SearchBar handleCity={handleCity} />
        <MenuItems />
        <Separator />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {listingInfos.map((item, i) => (
          <ListingCard item={item} key={i} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

// Style css
const styles = StyleSheet.create({
  bodyStyle: {
    padding: 10,
    backgroundColor: "#f8f9f9",
    marginTop: StatusBar.currentHeight,
  },
  toTextBg: {
    backgroundColor: "#1ED9A6",
    borderRadius: 20,
    color: "white",
    fontSize: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
  },
  topBg: {
    resizeMode: "cover",
    width: "100%",
    height: 170,
    justifyContent: "center",
    alignItems: "center",
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
    // marginTop: 20,
    // marginBottom: 20,
    marginLeft: 25,
    marginRight: 20,
  },
  myHr: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingTop: 4,
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#eee",
    borderBottomWidth: 1, //StyleSheet.hairlineWidth,
  },
});

export default Listings;
