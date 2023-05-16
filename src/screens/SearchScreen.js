import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san francisco",
          term: term,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("something went wrong");
    }
  };

  return (
    <View style={styles.page}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {error ? <Text>{error}</Text> : <Text>We have found {results.length} results</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
});

export default SearchScreen;
