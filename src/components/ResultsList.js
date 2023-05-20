import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import ResultsDetail from "./ResultsDetail";

export default ({ title, results }) => {
  // Results is an array of objects which contain business information
  console.log(results);
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
        horizontal={true}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
