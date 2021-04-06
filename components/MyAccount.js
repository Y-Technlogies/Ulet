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
import { Avatar, Accessory } from "react-native-elements";

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
        {/* <Image
          style={styles.profilePicStyle}
          source={require("../assets/images/tiny_logo.png")}
        /> */}

        <View style={{ paddingTop: 50 }}>
          <Avatar
            activeOpacity={0.2}
            // avatarStyle={{}}
            // containerStyle={{}}
            // iconStyle={{}}
            // imageProps={{}}
            // onAccessoryPress={() => alert("onAccessoryPress")}
            // onLongPress={() => alert("onLongPress")}
            // overlayContainerStyle={{}}
            // placeholderStyle={{}}
            rounded
            // showAccessory
            size={120}
            source={require("../assets/images/tiny_logo.png")}
            title="P"
            // titleStyle={{}}
          >
            <Avatar.Accessory size={20} onPress={() => alert("onPress")} />
          </Avatar>
        </View>

        <View style={{ paddingTop: 20 }}>
          <Text style={styles.toTextBg}>Upgrade to Ulet Premium</Text>
        </View>
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

      {/* Body content */}
      <View style={styles.bodyRow}>
        <Image
          style={{ width: "16%", height: 50 }}
          source={require("../assets/images/man.png")}
        />
        <View
          style={{
            width: "84%",
            height: 50,
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 18 }}>My Preferences</Text>
          <Text style={{ fontSize: 12 }}>
            choose who you'd like to let stay with you
          </Text>
          <View style={styles.myHr} />
        </View>
      </View>

      <View style={styles.bodyRow}>
        <Image
          style={{ width: "16%", height: 50 }}
          source={require("../assets/images/star.png")}
        />
        <View
          style={{
            width: "84%",
            height: 50,
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 18 }}>Favourites</Text>
          <Text style={{ fontSize: 12 }}>
            people who you sent invitations to
          </Text>
          <View style={styles.myHr} />
        </View>
      </View>

      <View style={styles.bodyRow}>
        <Image
          style={{ width: "16%", height: 50 }}
          source={require("../assets/images/note.png")}
        />
        <View
          style={{
            width: "84%",
            height: 50,
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 18 }}>Listings</Text>
          <Text style={{ fontSize: 12 }}>edit your listings here</Text>
          <View style={styles.myHr} />
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
    marginTop: 50,
  },
  bodyRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
  },
  myHr: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingTop: 4,
  },
});

export default MyAccount;
