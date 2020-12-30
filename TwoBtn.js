import React from 'react';
import { Text, View, Button } from 'react-native';

const TwoBtn = (props) => {
  return (
    <View>
      <Button
        title='Go to Home'
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button title='Go back' onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default TwoBtn;
