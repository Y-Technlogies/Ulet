import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const onPress = () => {
  // My Action
};

const SearchPost = (props) => {
  return (
    <View style={styles.bodyStyle}>
      <Text style={styles.titleText}>ULET</Text>

      <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        <Text style={styles.btnText}>SEARCH</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
        <Text style={styles.btnText}>POST</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.bottomText}>BROWSE CATEGORIES</Text>
      </TouchableOpacity>
    </View>
  );
};

// Style css
const styles = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Lato-Black',
    fontSize: 100,
    color: '#1ed9a6',
    marginBottom: '50px',
  },
  btnStyle: {
    backgroundColor: 'white',
    borderRadius: 5,
    border: '2px solid #1ed9a6',
    alignItems: 'center',
    padding: 10,
    width: '200px',
    marginBottom: '10px',
  },
  btnText: {
    fontFamily: 'Lato-Black',
    fontSize: 14,
    color: '#1ed9a6',
  },
  bottomText: {
    fontFamily: 'Lato-Black',
    color: '#1ed9a6',
    fontWeight: 'bold',
    marginTop: '50px',
  },
});

export default SearchPost;
