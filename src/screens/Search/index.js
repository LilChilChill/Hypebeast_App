import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, FlatList,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../consts/colors';
import { useNavigation } from '@react-navigation/native';

import Jordan from '../../data/jordan';
import Nike from '../../data/nike';
import Puma from '../../data/puma';

const productData = {
  PUMA: Puma,
  NIKE: Nike,
  JORDAN: Jordan,
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
    } else {
      const results = [];
  
      for (const category in productData) {
        const products = productData[category];
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
        results.push(...filteredProducts);
      }
  
      setSearchResults(results);
    }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 35, backgroundColor: "#EAEDF4" }}>
      <View style={{ marginTop: 50, marginBottom: 20, flexDirection: "row" }}>
        <View style={styles.searchContainer}>
          <Ionicons name='mic-outline' size={20} style={{ marginLeft: 15, marginRight: 5 }} />
          <TextInput
            placeholder='Search ...'
            onChangeText={setSearchTerm}
            onBlur={performSearch}
            style={styles.input}
          />
        </View>
        <View style={styles.micBtn}>
          <Ionicons name='search-outline' size={25} color={COLORS.white} />
        </View>
      </View>

      
    <FlatList
    data={searchResults}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={styles.productContainer}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <Image source={item.image} style={styles.productImage} />
                <View style={{ flexDirection: "column" }}>
                <Text style={{ marginVertical: 0, fontFamily: "boldSfPro", fontSize: 20, marginRight: 20 }}>{item.name}</Text>
                <Text style={{ marginVertical: 10, fontFamily: "sfPro", fontSize: 15, marginRight: 20 }}>{item.describe}</Text>
                <Text style={{ marginVertical: 0, fontFamily: "sfPro", fontSize: 20, marginRight: 20 }}>{item.price}</Text>
                </View>
            </View>
            </View>
        </View>
        </TouchableOpacity>
    )}
    />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    height: 40,
    backgroundColor: "rgba(220, 220, 220, 0.50)",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontFamily: "sfPro",
    color: COLORS.dark,
    flex: 1,
  },
  micBtn: {
    marginLeft: 10,
    width: 40,
    height: 40,
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {
    marginTop: 10,
    justifyContent: "center",
    width: "100%",
    height: 160,
    padding: 16,
    marginBottom: 16,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 20,
  },
  productName: {
    fontFamily: "boldSfPro",
    fontSize: 20,
    marginBottom: 5,
  },
  productDescription: {
    fontFamily: "sfPro",
    fontSize: 15,
    marginBottom: 5,
  },
  productPrice: {
    fontFamily: "sfPro",
    fontSize: 20,
  },
});
