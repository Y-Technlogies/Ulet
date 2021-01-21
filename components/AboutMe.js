import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";

const onPress = () => {
  // My Action
};

const AboutMe = (props) => {
  return (
    <View style={styles.bodyStyle}>
      <ImageBackground
        source={require("../assets/images/logo.png")}
        style={styles.topBg}
      >
        {/* <Image
          style={styles.profilePicStyle}
          source={require("../assets/images/tiny_logo.png")}
        /> */}
      </ImageBackground>

      <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 18 }}>
        Jhon, 33
      </Text>
      <Text style={{ paddingLeft: 20, paddingTop: 10 }}>Man</Text>
      <View style={styles.myHr} />
      <Text style={{ paddingLeft: 20, paddingTop: 10 }}>33</Text>
      <View style={styles.myHr} />
      <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 18 }}>
        Job and Education
      </Text>
      <Text style={{ paddingLeft: 20, paddingTop: 10 }}>Job</Text>
      <View style={styles.myHr} />
      <Text style={{ paddingLeft: 20, paddingTop: 10 }}>Employer</Text>
      <View style={styles.myHr} />
      <Text style={{ paddingLeft: 20, paddingTop: 10 }}>School</Text>
      <View style={styles.myHr} />
      <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 18 }}>
        About Me
      </Text>
      <Text style={{ paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}>
        I’m fun and easy going and really love meeting new people on my
        adventures. I have met some great people on this platform who I now call
        my friends.
      </Text>
      <View style={styles.myHr} />
    </View>
  );
};

// Style css
const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    // alignItems: "center",
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

export default AboutMe;
