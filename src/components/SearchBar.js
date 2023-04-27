import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

//Feather is a library and you can use it as a component to import an icon named "search"
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "rgb(240,240,240)",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    padding: 5,
    gap: 10,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
