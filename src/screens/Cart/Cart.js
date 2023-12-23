import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const Cart = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [reloadCart, setReloadCart] = useState(false);

  useEffect(() => {
    const loadCartFromStorage = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart).map(item => ({ ...item, quantity: item.quantity || 1 }));
          setCartItems(parsedCart);
        }
      } catch (error) {
        console.error('Error loading cart from storage:', error);
      } finally {
        setReloadCart(false);
      }
    };

    loadCartFromStorage();
  }, [reloadCart]);

  const handleReloadCart = () => {
    setReloadCart(true);
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleIncreaseQuantity = async (productId) => {
    try {
      const updatedCart = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const handleDecreaseQuantity = async (productId) => {
    try {
      const updatedCart = cartItems.map((item) =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  const handleCheckout = () => {
    navigation.navigate("Payment")
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
          <Text style={styles.itemQuantity}>{`Quantity: ${item.quantity}`}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleIncreaseQuantity(item.id)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveFromCart(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Giỏ hàng của bạn</Text>
        <TouchableOpacity style={styles.reloadCartButton} onPress={handleReloadCart}>
          <Ionicons name='refresh-outline' size={24}/>
        </TouchableOpacity>
      </View>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Không có sản phẩm trong giỏ hàng</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {cartItems.length > 0 && ( // Hiển thị nút thanh toán nếu có sản phẩm trong giỏ hàng
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Thanh toán</Text>
          </TouchableOpacity>
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
  reloadCartButton: {
    padding: 8,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
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
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
  },
  quantityButtonText: {
    fontSize: 18,
  },
  itemQuantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
  },
  emptyCartText: {
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

export default Cart;
