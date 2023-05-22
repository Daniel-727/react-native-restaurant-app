import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  // Destructuring our custom hook
  const [results, error, searchApi] = useResults();

  //console.log(props);

  const filterResultsByPrice = (price) => {
    // Price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.page}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
        <ResultsList results={filterResultsByPrice("$$$$")} title="Chamillionaire" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default SearchScreen;
