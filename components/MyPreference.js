import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Switch,
  ScrollView,
  TextInput,
} from "react-native";

const onPress = () => {
  // My Action
};

const MyPreference = (props) => {
  // Sample array of object - Features
  const [features, setFeatures] = useState([
    {
      name: "Furnished",
      is: false,
    },
    {
      name: "Wifi",
      is: false,
    },
    {
      name: "Hydro",
      is: false,
    },
    {
      name: "Water",
      is: false,
    },
    {
      name: "Laundry on-site",
      is: false,
    },
    {
      name: "Kitchen",
      is: false,
    },
  ]);

  const [goodFor, setGoodFor] = useState([
    {
      name: "Male",
      is: false,
    },
    {
      name: "Female",
      is: false,
    },
    {
      name: "LGBTQ",
      is: false,
    },
    {
      name: "Furry friends",
      is: false,
    },
    {
      name: "Professionals",
      is: false,
    },
    {
      name: "Students",
      is: false,
    },
  ]);

  const [onlyAfter, setOnlyAfter] = useState([
    {
      name: "East Asian",
      is: false,
    },
    {
      name: "South Asian",
      is: false,
    },
    {
      name: "European",
      is: false,
    },
    {
      name: "Middle Eastern",
      is: false,
    },
    {
      name: "African",
      is: false,
    },
    {
      name: "Natives",
      is: false,
    },
    {
      name: "Hispanic",
      is: false,
    },
    {
      name: "Mixed",
      is: false,
    },
    {
      name: "Others",
      is: false,
    },
  ]);

  const goodForSwitch = (idx) => {
    let words = [...goodFor];
    words[idx].is = !words[idx].is;

    setGoodFor(words);
  };

  const featuresSwitch = (idx) => {
    let words = [...features];
    words[idx].is = !words[idx].is;

    setFeatures(words);
  };

  const onlyAfterSwitch = (idx) => {
    let words = [...onlyAfter];
    words[idx].is = !words[idx].is;

    setOnlyAfter(words);
  };

  // const [switchValue, setSwitchValue] = useState(false);

  // const toggleSwitch = (value) => {
  //   setSwitchValue(value);
  // };

  const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const [sliderOneValue, setSliderOneValue] = React.useState([5]);
  const [multiSliderValue, setMultiSliderValue] = React.useState([10, 80]);
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = React.useState([0, 100]);

  const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

  const sliderOneValuesChange = (values) => setSliderOneValue(values);

  sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

  multiSliderValuesChange = (values) => setMultiSliderValue(values);

  nonCollidingMultiSliderValuesChange = (values) =>
    setNonCollidingMultiSliderValue(values);

  return (
    <View style={styles.bodyStyle}>
      <ScrollView>
        {/* Top Image */}
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
        {/* End Top Image */}

        {/* Flex column for switch top */}
        <View style={{ flex: 1, flexDirection: "column" }}>
          {/* Body content */}
          <View style={styles.bodyRow}>
            <View
              style={{
                width: "50%",
                marginTop: 10,
                marginLeft: 5,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                My place is good for
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                marginTop: 10,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Features</Text>
            </View>
          </View>

          <View style={styles.bodyRow}>
            <View style={{ width: "50%" }}>
              {goodFor.map((item, i) => (
                <View key={i} style={{ height: 30 }}>
                  <View style={styles.container}>
                    <Switch
                      style={{ marginTop: 0 }}
                      onValueChange={() => goodForSwitch(i)}
                      value={item.is}
                    />
                    <Text>{item.name}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={{ width: "50%" }}>
              {features.map((item, i) => (
                <View key={i} style={{ height: 30 }}>
                  <View style={styles.container}>
                    <Switch
                      style={{ marginTop: 0 }}
                      onValueChange={() => featuresSwitch(i)}
                      value={item.is}
                    />
                    <Text>{item.name}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Range Part */}
          <Text
            style={{
              paddingLeft: 30,
              paddingTop: 20,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Age range
          </Text>
          <Text
            style={{
              paddingLeft: 30,
              paddingTop: 5,
            }}
          >
            {multiSliderValue[0]} to {multiSliderValue[1]} years old
          </Text>

          <View style={{ paddingHorizontal: 30 }}>
            <MultiSlider
              values={multiSliderValue}
              sliderLength={300}
              onValuesChangeStart={sliderOneValuesChangeStart}
              onValuesChange={multiSliderValuesChange}
              onValuesChangeFinish={sliderOneValuesChangeFinish}
              min={1}
              max={100}
            />
          </View>

          <View style={styles.bodyRow}>
            <View
              style={{
                width: "100%",
                marginTop: 10,
                marginLeft: 5,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                I am only after
              </Text>
            </View>
          </View>

          <View style={styles.bodyRow}>
            <View style={{ width: "100%" }}>
              {onlyAfter.map((item, i) => (
                <View key={i} style={{ height: 30 }}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ width: "50%" }}>
                      <View style={styles.container}>
                        <Switch
                          style={{ marginTop: 0 }}
                          onValueChange={() => onlyAfterSwitch(i)}
                          value={item.is}
                        />
                        <Text>{item.name}</Text>
                      </View>
                    </View>

                    <View style={{ width: "50%" }}>
                      <TextInput
                        style={{
                          height: 30,
                          borderBottomColor: "gray",
                          borderBottomWidth: 1,
                        }}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        placeholder="specific.."
                      />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* End bottom switch part */}
      </ScrollView>
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
});

export default MyPreference;
