import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import TwoBtn from './TwoBtn';
import { LinearGradient } from 'expo-linear-gradient';

const Brand = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titleText}>ULET</Text>

      <LinearGradient
        // Button Linear Gradient
        colors={['#1ed9a6', '#335799']}
        style={styles.subBg}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.9 }}
      >
        <Text style={styles.subTitle}>BE INCLUDED</Text>
      </LinearGradient>
      {/* <TwoBtn navigation={props.navigation} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Lato-Black',
    fontSize: 100,
    // fontWeight: 'bold',
    color: '#1ed9a6',
  },
  subBg: {
    borderRadius: 10,
  },
  subTitle: {
    paddingRight: 76,
    paddingLeft: 76,
    color: 'white',
  },
});

export default Brand;
