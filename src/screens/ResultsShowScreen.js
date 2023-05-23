import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  /* Default value for objects are usually set to null */
  const [result, setResult] = useState(null);
  /* The navigation.getParam() function is how we get the object passed by ResultsList */
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  // Temporary placeholder code to return null if there is no result
  if (!result) {
    return null;
  }

  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: { width: 200, height: 300 },
});
