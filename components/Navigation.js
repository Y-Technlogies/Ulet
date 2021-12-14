import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../components/OtherScreens';
import SearchOrPost from '../components/OtherScreens';
import MyAccount from '../components/OtherScreens';
import MyPreference from '../components/OtherScreens';
import MyListings from '../components/OtherScreens';
import ListingsResult from '../components/OtherScreens';
import ShowCarousel from '../components/OtherScreens';
import ShowZoomImage from '../components/OtherScreens';

const CustomDrawer = props => {
  return ( 
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeaderStyle}>
            <Text style={{ color: 'white', fontSize: 40 }}>Welcome!</Text>
            <Text style={{ color: 'white', fontSize: 10, paddingBottom: 10 }}>Sign in to get the most out of Ulet</Text>

            <TouchableOpacity style={styles.drawerHeaderButtonStyle}>
              <Text style={styles.drawerHeaderTextStyle}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerHeaderButtonStyle}>
              <Text style={styles.drawerHeaderTextStyle}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
   );
};

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search Or Post" component={SearchOrPost} />
      <Drawer.Screen name="My Account" component={MyAccount} />
      <Drawer.Screen name="My Preference" component={MyPreference} />
      <Drawer.Screen name="My Listings" component={MyListings} />
      <Drawer.Screen name="Listings Result" component={ListingsResult} />
      <Drawer.Screen name="Show Carousel" component={ShowCarousel} />
      <Drawer.Screen name="ShowZoomImage" component={ShowZoomImage} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerHeaderStyle:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#1ed9a6',
  },
  drawerHeaderButtonStyle: {
    backgroundColor: '#1ed9a6',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
    width: 100,
  },
  drawerHeaderTextStyle: {
    fontSize: 10,
    color: 'white',
  },
});
