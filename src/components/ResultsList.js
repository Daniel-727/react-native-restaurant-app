import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

export default withNavigation(({ title, results, navigation }) => {
  // Results is an array of objects which contain business information
  // If there are no results then return nothing
  return results.length === 0 ? null : (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            /* Passing in an object in the navigate function is similar to passing props to a child component, the specified screen will now have the data that you passed */
            <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
});
