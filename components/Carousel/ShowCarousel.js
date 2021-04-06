import React from "react";
import { View, Text } from "react-native";
import { dummyData } from "./Data";
import Carousel from "./Carousel";

const ShowCarousel = ({ navigation }) => {
  return (
    <View>
      <Carousel data={dummyData} />
    </View>
  );
};

export default ShowCarousel;
