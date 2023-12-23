import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentSuccess = ({ navigation }) => {
  const handleBackToHome = () => {
    // Điều hướng người dùng quay lại trang chủ
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Thanh toán thành công!</Text>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
        <Text style={styles.backButtonText}>Quay lại trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PaymentSuccess;
