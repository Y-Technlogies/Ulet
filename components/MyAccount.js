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
// import cover from '../assets/images/cover.jgp';

const onPress = () => {
  // My Action
};

const MyAccount = (props) => {
  return (
    <View style={styles.bodyStyle}>
      <ImageBackground
        source={require("../assets/images/logo.png")}
        style={styles.topBg}
      >
        <Image
          style={styles.profilePicStyle}
          source={require("../assets/images/tiny_logo.png")}
        />
      </ImageBackground>

      {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      /> */}
    </View>
  );
};

// Style css
const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
  },

  topBg: {
    resizeMode: "cover",
    // width: '100%',
    height: 100,
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
});

export default MyAccount;
