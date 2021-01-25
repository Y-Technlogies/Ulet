import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Switch,
} from "react-native";

const onPress = () => {
  // My Action
};

const MyPreference = (props) => {
  // Sample array of object - Features
  const features = [
    {
      name: "Furnished",
      value: false,
    },
    {
      name: "Wifi",
      value: false,
    },
    {
      name: "Hydro",
      value: false,
    },
  ];

  const [goodFor, setGoodFor] = useState([
    {
      name: "Male1",
      value: false,
    },
    {
      name: "Female",
      value: false,
    },
    {
      name: "LGBTQ",
      value: false,
    },
  ]);

  const goodForSwitch = (value) => {
    setGoodFor(!value);
  };

  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value, i) => {
    setSwitchValue(!value);
  };

  return (
    <View style={styles.bodyStyle}>
      <View
        style={{
          paddingLeft: 25,
          paddingRight: 25,
          paddingTop: 10,
        }}
      >
        <ImageBackground
          source={require("../assets/images/preference.jpg")}
          style={styles.topBg}
          imageStyle={{ borderRadius: 12 }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            Discover more with Ulet Premium
          </Text>
          <View style={{ paddingTop: 30 }}>
            <Text style={styles.toTextBg}>Upgrade to Ulet Premium</Text>
          </View>
        </ImageBackground>
      </View>

      <View>
        {/* Body content */}
        <View style={styles.bodyRow}>
          <View style={{ width: "50%", height: 50 }}>
            <Text>My place is good for</Text>
          </View>
          <View style={{ width: "50%", height: 50 }}>
            <Text>Features</Text>
          </View>
        </View>

        <View style={styles.bodyRow}>
          <View style={{ width: "50%" }}>
            {goodFor.map((item, i) => (
              <View style={{ paddingTop: 15, paddingBottom: 15 }}>
                <View style={styles.container}>
                  <Switch
                    style={{ marginTop: 0 }}
                    onValueChange={() => goodForSwitch(i)}
                    value={item.value}
                  />
                  <Text>{item.name}</Text>
                  <Text>{item.value}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={{ width: "50%" }}>
            {features.map((item) => (
              <View style={{ paddingTop: 15, paddingBottom: 15 }}>
                <View style={styles.container}>
                  <Switch
                    style={{ marginTop: 0 }}
                    onValueChange={toggleSwitch}
                    value={switchValue}
                  />
                  <Text>{item.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

// Style css
const styles = StyleSheet.create({
  bodyStyle: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: 'center',
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
    marginTop: 20,
    marginBottom: 20,
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
});

export default MyPreference;
