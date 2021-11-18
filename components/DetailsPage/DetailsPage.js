import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { dummyData } from "../Carousel/Data";
import Carousel from "../Carousel/Carousel";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";

export default function DetailsPage(props) {
  return (
    <View>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <View>
          <Carousel data={dummyData} navigation={props.navigation} />
          <View style={styles.titleBox}>
            <Text style={styles.titleStyle}>
              Vintage Mercury Glass Ornaments (Lot of 12)
            </Text>

            <View style={styles.priceBox}>
              <Text style={{ marginTop: 6, fontWeight: "700" }}>$</Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "700",
                }}
              >
                25
              </Text>
            </View>

            <View style={styles.location}>
              <Ionicons
                name="location"
                size={15}
                color="#2874A6"
                style={{ marginRight: 8 }}
              />
              <Text style={{ color: "#2874A6" }}>
                There is a address/ location
              </Text>
            </View>
          </View>

          <Divider />

          <View style={styles.ownerInfo}>
            <View style={{ marginRight: 10 }}>
              <Avatar
                rounded
                size={30}
                source={require("../../assets/images/user.png")}
                title="P"
              />
            </View>
            <View>
              <View style={styles.flexRow}>
                <Text style={{ fontWeight: "bold" }}>Owner Name</Text>
                <Text style={{ fontSize: 10, marginLeft: 10 }}>(45 ads)</Text>
              </View>
              <Text style={{ fontSize: 10 }}>Member since November 2021</Text>
            </View>
          </View>
          <Divider />

          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "400" }}>
              Set of 12 small vintage mercury glass ornaments in good vintage
              condition, (red ones show some wear)
            </Text>
          </View>

          <Divider />
        </View>
      </ScrollView>
    </View>
  );
}

const Divider = () => (
  <View
    style={{
      borderBottomColor: "#eaeaea",
      borderBottomWidth: 8,
    }}
  />
);

const styles = StyleSheet.create({
  titleBox: {
    margin: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "700",
  },
  priceBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  ownerInfo: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
