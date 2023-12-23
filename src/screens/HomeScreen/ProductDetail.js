import React, { useState, useEffect, forwardRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from '../../themes/Icons';
import Toast from 'react-native-toast-message';

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async () => {
    try {
      // Lấy thông tin giỏ hàng hiện tại từ AsyncStorage
      const currentCart = JSON.parse(await AsyncStorage.getItem('cart')) || [];

      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingItemIndex = currentCart.findIndex(item => item.id === product.id);

      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng
        currentCart[existingItemIndex].quantity += 1;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
        const newItem = { ...product, quantity: 1 };
        currentCart.push(newItem);
      }

      // Lưu thông tin giỏ hàng mới vào AsyncStorage
      await AsyncStorage.setItem('cart', JSON.stringify(currentCart));

      // Cập nhật state để hiển thị số sản phẩm trong giỏ hàng
      setCartItems(currentCart);

      // Hiển thị thông báo thành công
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Thành công',
        text2: 'Sản phẩm đã được thêm vào giỏ hàng!',
        visibilityTime: 3000,
        autoHide: true,
      });

    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  useEffect(() => {
    const loadCartFromStorage = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          setCartItems(parsedCart);
        }
      } catch (error) {
        console.error('Error loading cart from storage:', error);
      }
    };

    loadCartFromStorage();
  }, []);

  const [HeartItems,setHeartItems]=useState([]);
  const addToHeart = async () => {
    try {
      // Lấy thông tin giỏ hàng hiện tại từ AsyncStorage
      const currentHeart = JSON.parse(await AsyncStorage.getItem('Heart')) || [];

      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingItemIndex = currentHeart.findIndex(item => item.id === product.id);

      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng
        currentHeart[existingItemIndex].quantity += 1;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
        const newItem = { ...product, quantity: 1 };
        currentHeart.push(newItem);
      }

      // Lưu thông tin giỏ hàng mới vào AsyncStorage
      await AsyncStorage.setItem('Heart', JSON.stringify(currentHeart));

      // Cập nhật state để hiển thị số sản phẩm trong giỏ hàng
      setHeartItems(currentHeart);

      // Hiển thị thông báo thành công
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Thành công',
        text2: 'Đã thêm sản phẩm vào danh sách yêu thích!',
        visibilityTime: 3000,
        autoHide: true,
      });

    } catch (error) {
      console.error('Error adding to Heart:', error);
    }
  };

  useEffect(() => {
    const loadHeartFromStorage = async () => {
      try {
        const storedHeart = await AsyncStorage.getItem('Heart');
        if (storedHeart) {
          const parsedHeart = JSON.parse(storedHeart);
          setHeartItems(parsedHeart);
        }
      } catch (error) {
        console.error('Error loading Heart from storage:', error);
      }
    };

    loadHeartFromStorage();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.header_button}>
          {Icons.Icons({ name: 'back', height: 20, width: 20 })}
        </TouchableOpacity>
        <Text style={styles.productName}>{product.name}</Text>
        <TouchableOpacity style={styles.header_button} onPress={addToHeart}>
          {Icons.Icons({ name: 'heart', height: 20, width: 20 })}
        </TouchableOpacity>
      </View>
      <View style={styles.product}>
        <View style={styles.product}>
          <Image source={product.image} style={styles.productImage} />
          <View style={styles.behind}>
            <View style={styles.behind_title}>
              <Text style={styles.titleLeft}>{product.title}</Text>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.titleRight}>{product.title}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.productPrice}>{product.price}</Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.cart} onPress={addToCart}>
            {Icons.Icons({ name: 'bag', height: 35, width: 30 })}
          </TouchableOpacity>
          <TouchableOpacity style={styles.down} onPress={() => navigation.navigate("Detail")}>
            {Icons.Icons({ name: 'down', height: 45, width: 18 })}
          </TouchableOpacity>
        </View>
      </View>
      {/* Toast message */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#EAEDF4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_button: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  product: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 330,
    height: 200,
    marginBottom: 16,
    marginRight: 20,
    transform: [{ rotate: '-30deg' }],
    zIndex: 1,
  },
  behind: {
    position: 'absolute',
    alignItems: 'center',
  },
  behind_title: {
    transform: [{ rotate: '90deg' }],

  },
  titleLeft: {
    fontSize: 120,
    fontWeight: '600',
    position: 'absolute',
    bottom: 70,
    color: 'rgba(128, 128, 128, 0.1)'
  },
  title: {
    fontSize: 120,
    fontWeight: '600',
  },
  titleRight: {
    fontSize: 120,
    fontWeight: '600',
    position: 'absolute',
    top: 70,
    color: 'rgba(128, 128, 128, 0.1)'
  },
  productPrice: {
    color: '#4E4E4E',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 120,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productCategory: {
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#000',
    width: 50,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: 50
  },
  cart: {

  },
  down: {
    marginTop: 8,
  },
});

export default ProductDetail;
