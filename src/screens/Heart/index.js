import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const Heart = ({ route, navigation }) => {
    const [HeartItems, setHeartItems] = useState([]);
    const [reloadHeart, setReloadHeart] = useState(false);
  
    useEffect(() => {
      const loadHeartFromStorage = async () => {
        try {
          const storedHeart = await AsyncStorage.getItem('Heart');
          if (storedHeart) {
            const parsedHeart = JSON.parse(storedHeart).map(item => ({ ...item, quantity: item.quantity || 1 }));
            setHeartItems(parsedHeart);
          }
        } catch (error) {
          console.error('Error loading Heart from storage:', error);
        } finally {
          setReloadHeart(false);
        }
      };
  
      loadHeartFromStorage();
    }, [reloadHeart]);
  
    const handleReloadHeart = () => {
      setReloadHeart(true);
    };
  
    const handleRemoveFromHeart = async (productId) => {
      try {
        const updatedHeart = HeartItems.filter((item) => item.id !== productId);
        setHeartItems(updatedHeart);
        await AsyncStorage.setItem('Heart', JSON.stringify(updatedHeart));
      } catch (error) {
        console.error('Error removing from Heart:', error);
      }
    };
  
    const handleIncreaseQuantity = async (productId) => {
      try {
        const updatedHeart = HeartItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setHeartItems(updatedHeart);
        await AsyncStorage.setItem('Heart', JSON.stringify(updatedHeart));
      } catch (error) {
        console.error('Error increasing quantity:', error);
      }
    };
  
    const handleDecreaseQuantity = async (productId) => {
      try {
        const updatedHeart = HeartItems.map((item) =>
          item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setHeartItems(updatedHeart);
        await AsyncStorage.setItem('Heart', JSON.stringify(updatedHeart));
      } catch (error) {
        console.error('Error decreasing quantity:', error);
      }
    };
  
  
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleDecreaseQuantity(item.id)}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.itemQuantity}>{` ${item.quantity}`}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleIncreaseQuantity(item.id)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemoveFromHeart(item.id)}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>DANH SÁCH YÊU THÍCH</Text>
          <TouchableOpacity style={styles.reloadHeartButton} onPress={handleReloadHeart}>
            <Ionicons name='refresh-outline' size={24}/>
          </TouchableOpacity>
        </View>
        {HeartItems.length === 0 ? (
          <Text style={styles.emptyHeartText}>Danh sách trống</Text>
        ) : (
          <FlatList
            data={HeartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    reloadHeartButton: {
      padding: 8,
    },
    item: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    itemImage: {
      width: 120,
      height: 200,
      marginRight: 16,
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    itemPrice: {
      fontSize: 14,
      marginBottom: 8,
    },
    quantityControls: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    quantityButton: {
      padding: 8,
      backgroundColor: '#rgb(201, 154, 0)',
      borderRadius: 4,
      marginRight: 8,
      paddingHorizontal:15,
    },
    quantityButtonText: {
      fontSize: 18,
    },
    itemQuantity: {
      fontSize: 16,
      marginHorizontal: 8,
      marginRight:14,
      marginLeft:4,
    },
    removeButton: {
      backgroundColor: 'rgb(201, 154, 0)',
      padding: 8,
      borderRadius: 4,
      alignItems: 'center',
    },
    removeButtonText: {
      color: 'white',
    },
    emptyHeartText: {
      fontSize: 18,
      textAlign: 'center',
    },
    checkoutButton: {
      backgroundColor: 'green',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default Heart;
