import React from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

console.disableYellowBox = true;

export default function ZoomImage({ route }) {
  const navigation = useNavigation();
  const { imgUrl } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#111111" }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.title}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
          style={{
            padding: 10,
          }}
        >
          <Image
            style={{ flex: 1, width: null, height: "100%" }}
            // source={require("../../assets/images/logo.png")}
            source={{ uri: imgUrl }}
            resizeMode="contain"
          />
        </ReactNativeZoomableView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingLeft: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
});
