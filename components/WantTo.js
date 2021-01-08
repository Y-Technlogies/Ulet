import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';

const onPress = () => {
  // My Action
};

const WantTo = (props) => {
  const [selectedValue, setSelectedValue] = useState('java');
  let [offerBtn, setOfferBtn] = useState(styles.activeBtnStyle);
  let [offerText, setOfferText] = useState(styles.activeBtnText);
  let [findBtn, setFindBtn] = useState(styles.btnStyle);
  let [findText, setFindText] = useState(styles.btnText);

  const callOffer = () => {
    setOfferBtn(styles.activeBtnStyle);
    setOfferText(styles.activeBtnText);
    setFindBtn(styles.btnStyle);
    setFindText(styles.btnText);
  };

  const callFind = () => {
    setOfferBtn(styles.btnStyle);
    setOfferText(styles.btnText);
    setFindBtn(styles.activeBtnStyle);
    setFindText(styles.activeBtnText);
  };

  return (
    <View style={styles.bodyStyle}>
      <Text style={styles.titleText}>I WANT TO</Text>

      <Text
        style={{
          borderWidth: 2,
          borderColor: '#1ed9a6',
          marginBottom: 10,
          borderRadius: 5,
        }}
      >
        <TouchableOpacity style={offerBtn} onPress={callOffer}>
          <Text style={offerText}>OFFER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={findBtn} onPress={callFind}>
          <Text style={findText}>FIND</Text>
        </TouchableOpacity>
      </Text>

      <Picker
        selectedValue={selectedValue}
        style={styles.pickerStyle}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        // itemStyle={{ backgroundColor: 'grey', color: 'blue', fontSize: 17 }}
      >
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='JavaScript' value='js' />
      </Picker>
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
    fontSize: 40,
    color: '#1ed9a6',
    marginBottom: 50,
  },
  btnStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 98,
    height: 35,
  },
  activeBtnStyle: {
    backgroundColor: '#1ed9a6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 98,
    height: 35,
  },
  btnText: {
    fontFamily: 'Lato-Black',
    fontSize: 14,
    color: '#1ed9a6',
  },
  activeBtnText: {
    fontFamily: 'Lato-Black',
    fontSize: 14,
    color: 'white',
  },
  bottomText: {
    fontFamily: 'Lato-Black',
    color: '#1ed9a6',
    fontWeight: 'bold',
    marginTop: 50,
  },
  pickerStyle: {
    fontFamily: 'Lato-Black',
    width: 200,
    color: '#1ed9a6',
    borderRadius: 6,
    // border: '2px solid #1ed9a6',
    padding: 8,
  },
});

export default WantTo;
