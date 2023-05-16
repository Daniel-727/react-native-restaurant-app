import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  // Destructuring our custom hook
  const [results, error, searchApi] = useResults();

  return (
    <View style={styles.page}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
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
