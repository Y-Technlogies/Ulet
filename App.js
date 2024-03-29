import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

// Routing - go one screen or page to another
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Routing

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import SearchPost from "./components/SearchPost";
import WantTo from "./components/WantTo";
import Login from "./components/Login";
import SignUpScreen from "./components/SignUpScreen";
import SignInUp from "./components/SignInUp";
import MyAccount from "./components/MyAccount";
import Brand from "./components/Brand";
import AboutMe from "./components/AboutMe";
import MyPreference from "./components/MyPreference";
import MyListings from "./components/MyListings";
import ShowCarousel from "./components/Carousel/ShowCarousel";
import Listings from "./components/ListingsPages/Listings";
import { LinearGradient } from "expo-linear-gradient";

function HomeScreen({ navigation }) {
  const [firstLoad, setFirstLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false);
    }, 3000);
  }, []);
  return (
    <>
      {firstLoad ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.titleText}>ULET</Text>

          <LinearGradient
            // Button Linear Gradient
            colors={["#1ed9a6", "#335799"]}
            style={styles.subBg}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.9 }}
          >
            <Text style={styles.subTitle}>BE INCLUDED</Text>
          </LinearGradient>
          {/* <TwoBtn navigation={props.navigation} /> */}
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate("Details")}
          />
          <Button
            title="Go to Brand Name"
            onPress={() => navigation.navigate("Brand")}
          />
          <Button
            title="Search or Post"
            onPress={() => navigation.navigate("Search or Post")}
          />
          {/* <Button
        title="I want to"
        onPress={() => navigation.navigate("I want to")}
      />

      <Button
        title="About Me"
        onPress={() => navigation.navigate("About Me")}
      /> */}

          <Button
            title="My Account"
            onPress={() => navigation.navigate("My Account")}
          />

          <Button
            title="My Preference"
            onPress={() => navigation.navigate("My Preference")}
          />

          <Button
            title="My Listings"
            onPress={() => navigation.navigate("My Listings")}
          />

          <Button
            title="Listings Result"
            onPress={() => navigation.navigate("Listing Result")}
          />

          <Button
            title="Show Carousel"
            onPress={() => navigation.navigate("Show Carousel")}
          />

          <Button title="Login" onPress={() => navigation.navigate("Login")} />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      )}
    </>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen 1</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  // Loading custom fonts from assets folder
  // we can add more fonts here
  let [fontsLoaded] = useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      // Routing - go one screen or page to another
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: {
              backgroundColor: "white",
            },
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Brand" component={Brand} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Search or Post" component={SearchPost} />
          {/* <Stack.Screen name="I want to" component={WantTo} /> */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="My Account" component={MyAccount} />
          {/* <Stack.Screen name="About Me" component={AboutMe} /> */}
          <Stack.Screen name="My Preference" component={MyPreference} />
          <Stack.Screen name="My Listings" component={MyListings} />
          <Stack.Screen name="Listing Result" component={Listings} />
          <Stack.Screen name="Show Carousel" component={ShowCarousel} />
          <Stack.Screen
            name="SignInUp"
            component={SignInUp}
            options={{
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// Style Part
const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Lato-Black",
    fontSize: 100,
    // fontWeight: 'bold',
    color: "#1ed9a6",
  },
  titleText: {
    fontFamily: "Lato-Black",
    fontSize: 100,
    // fontWeight: 'bold',
    color: "#1ed9a6",
  },
  subBg: {
    borderRadius: 10,
  },
  subTitle: {
    paddingRight: 76,
    paddingLeft: 76,
    color: "white",
  },
});

export default App;
