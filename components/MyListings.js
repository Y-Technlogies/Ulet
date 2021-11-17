import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";

const onPress = () => {
  // My Action
};

const MyListings = (props) => {
  return (
    <View style={styles.bodyStyle}>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{ width: 200, height: 150, backgroundColor: "powderblue" }}
            >
              <Image
                style={{}}
                source={require("../assets/images/house1.png")}
              />
            </View>

            <View
              style={{ width: 200, height: 150, backgroundColor: "powderblue" }}
            >
              <Image
                style={{}}
                source={require("../assets/images/house2.png")}
              />
            </View>

            <View
              style={{ width: 200, height: 150, backgroundColor: "powderblue" }}
            >
              <Image
                style={{}}
                source={require("../assets/images/house1.png")}
              />
            </View>

            <View
              style={{ width: 200, height: 150, backgroundColor: "powderblue" }}
            >
              <Image
                style={{}}
                source={require("../assets/images/house2.png")}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 18 }}>
        Description
      </Text>
      <Text style={{ paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}>
        Brand new, air-conditioned private room available in warm, inviting and
        stylish 4-room share house in heart of Toronto.
      </Text>
      <Text style={{ paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}>
        Room available from January 1st. Please contact for more info and
        viewing!
      </Text>
      {/* <View style={styles.myHr} /> */}
    </View>
  );
};

// Style css
const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    flexDirection: "column",
    // alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },

  topBg: {
    resizeMode: "cover",
    width: "100%",
    height: 200,
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
  },
  myHr: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 4,
  },
});

export default MyListings;
