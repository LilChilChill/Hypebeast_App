import React, { useState } from "react"
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, FlatList, Dimensions, StyleSheet, SafeAreaView } from 'react-native'
import Icons from "../../themes/Icons"
import Images from "../../themes/Images"
import jordanProducts from '../../data/jordan.js'
import nikeProducts from '../../data/nike.js'
import pumaProducts from '../../data/puma.js'
import { useNavigation } from '@react-navigation/native';
import { responsiveStyles } from '../responsiveStyles.js';


const categories = [
    {name: 'Jordan', icon:require('../../assests/images/icon_Jordan.png')},
    {name: 'Nike', icon:require('../../assests/images/icon_Nike.png')},
    {name: 'Puma', icon:require('../../assests/images/icon_Puma.png')},
];

const HomeScreen = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);


    const getProductsForCategory = (category) => {
        switch (category) {
            case 'Jordan':
                return jordanProducts; 
            case 'Nike':
                return nikeProducts;
            case 'Puma':
                return pumaProducts;
           default:
            return [];
        }
    };


    const filteredProducts = selectedCategory ? getProductsForCategory(selectedCategory) : [];

    const renderProductItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <Text style={{display:'none'}}>{item.title}</Text>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    const renderCategoryButton = (category) => (
        <TouchableOpacity
            style={[styles.categoryButton, category.name === selectedCategory && styles.selectedCategoryButton]}
            onPress={() => setSelectedCategory(category.name)}
            key={category.name}
        >
            <Image source={category.icon} style={styles.categoryIcon} />
            <Text style={styles.categoryButtonText}>{category.name}</Text>
        </TouchableOpacity>
    );

    const showAllProducts = () => {
        setSelectedCategory(null);

    };

    return (

        <View style={styles.container}>
            <View style={styles.header_container}>
                <TouchableOpacity >
                    {Icons.Icons({ name: 'menu', height: 70, width: 70 })}
                </TouchableOpacity>
                <Text style={{ color: '#000', fontFamily: "Strac" ,fontSize: 20, flexDirection: 'row' }}>HypeBeast</Text>
                <TouchableOpacity>
                    {Icons.Icons({ name: 'cart_top', height: 70, width: 70 })}
                </TouchableOpacity>
            </View>
            <Image source={Images.hello} style={styles.hello_container}/>
            <View style={styles.search_container}>
                <View style={styles.iconsearch_container}>
                    {Icons.Icons({ name: 'search', height: 20, width: 25 })}
                </View>
                <TextInput
                    style={styles.textinput_container}
                    placeholder="Search"
                    onPress={() => navigation.navigate("Search")}
                />
                <View style={styles.mic_container}>
                    {Icons.Icons({ name: 'mic', height: 20, width: 25 })}
                </View>
            </View>
            <View style={styles.select_container}>
                <Text style={styles.select_text}>Select Brand</Text>
                <TouchableOpacity >
                    <Text style={styles.viewall_text}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <View style={styles.categoryButtons}>
                    {categories.map((category) => renderCategoryButton(category))}
                </View>
            </View>
            <View style={styles.select_container}>
                <Text style={styles.select_text}>New Arraival</Text>
                <TouchableOpacity >
                    <Text style={styles.viewall_text}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id}
                renderItem={renderProductItem}
                numColumns={2}
            />
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#EAEDF4',
    },
    header: {
        marginBottom: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    categoryButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:365,
        marginLeft: 20,
        marginTop: 20,
        marginRight: 25,
    },
    categoryButton: {
        backgroundColor: '#FFF',
        padding: 8,
        borderRadius: 8,
        width: 100,
        borderWidth:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    selectedCategoryButton: {
        backgroundColor: '#000',
    },
    categoryIcon:{
        
    },
    categoryButtonText: {
        color: '#9B9B9B',
        fontWeight: 'bold',
    },
    productItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 17,
        marginBottom: 10,
    },
    productImage: {
        width: 175,
        height: 175,
        marginBottom: 8,
        backgroundColor:'#FFF',
        borderRadius:10,
    },
    productName: {
        fontSize: 16,
        width: 150,
        color:'#000',
        marginRight:19,
    },
    productPrice:{
        color:'#908e8c',
        fontSize: 18,
        width:150,
        marginRight:19,
    },
    header_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    hello_container: {
        marginLeft: 24,
    },
    search_container: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: '#DCDCDC80',
        height: 40,
        width: 300,
        borderRadius: 7,
    },
    iconsearch_container: {
        marginTop: 10,
        marginLeft: 8,
    },
    textinput_container: {
        marginLeft: 10,
        fontWeight: "100",
    },
    mic_container: {
        backgroundColor: '#2C2C2C',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        marginLeft: 240,
    },
    select_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
    },
    viewall_text: {
        color: '#828282'
    },
    select_text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    responsiveStyles,
});

