import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar(props) {
  const [searchData, setSearchData] = useState(null);
  const [selectedText, setSelectedText] = useState(null);

  const handleSearch = (text) => {
    console.log("text: " + text);
    setSelectedText();
    let newText = text; //handleTextFilter(text);
    text.length > 0 ? setSearchData(newText) : setSearchData(null);
  };

  const handleSelect = (title) => {
    props.handleCity(title);
    setSearchData(null);
    setSelectedText(title);
    console.log("ser text: " + title);
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#eee",
          borderRadius: 30,
          marginBottom: 5,
        }}
      >
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <TextInput
            // underlineColorAndroid="transparent"
            placeholder="Search"
            placeholderTextColor="gray"
            fontWeight="bold"
            width="60%"
            value={selectedText}
            // autoCapitalize="none"
            onChangeText={handleSearch}
          />

          <TouchableOpacity onPress={() => handleSelect(searchData)}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 40,
                backgroundColor: "white",
                padding: 9,
                borderRadius: 30,
                alignItems: "center",
              }}
            >
              <AntDesign
                name="clockcircle"
                size={11}
                style={{ marginRight: 8 }}
              />
              <Text>Search</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
  },
  autocompleteContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 0,
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
});
