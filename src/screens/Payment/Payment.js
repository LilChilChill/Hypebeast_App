import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../themes/Icons';
const Payment = () => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        // Sử dụng navigation.navigate để chuyển hướng đến màn hình khác
        navigation.navigate('AddNewCart');
    };
    return (
        <ScrollView style={styles.body_pay}>
            <View style={styles.back_pay}>
                <TouchableOpacity style={styles.headerbut_pay} onPress={() => navigation.goBack()}>
                    {Icons.Icons({ name: 'back', height: 20, width: 20 })}
                </TouchableOpacity>
                <Text style={styles.headertex_pay}>Payment Options</Text>
            </View>
            <View style={styles.info_pay}>
                <View style={styles.infoct}>
                    <View>
                        <Image source={require('../../assests/images/puma4.png')} style={styles.info_image} />
                    </View>
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ fontWeight: '600', marginBottom: 8, fontSize: 18 }}>Order Summary</Text>
                        <Text style={{ color: '#606060', marginBottom: 8 }}>Porsche Legacy Neo</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#606060' }}>Qty: 1</Text>
                            <Text style={{ color: '#606060', marginLeft: 80 }}>Size: 7 UK</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: -20 }}>
                    <Image source={require('../../assests/images/location.jpg')} style={{ height: 20 }} />
                    <Text style={{ color: '#606060', marginLeft: 10 }} >2972 Westheimer Rd. Santa Ana, Illinois 85486</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 12, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '600' }}>Total Amount</Text>
                    <Text style={{ fontWeight: '600', fontSize: 20, marginRight: 10 }}>$455.00</Text>
                </View>
            </View>
            <View style={styles.offers_pay}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assests/images/ticket.png')} style={{ height: 20 }} />
                    <Text style={{ marginLeft: 10, fontSize: 20 }}>Offers</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assests/images/nextp.png')} style={{ height: 20 }} />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 22, fontWeight: '600', marginVertical: 20 }}>Credi & Debit Cards</Text>
            <View style={styles.card_pay}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assests/images/logo_pay.png')} style={{ height: 28, width: 45 }} />
                    <Text style={{ fontSize: 16, marginLeft: 10 }}>Axis Bank  **** **** **** 2022</Text>
                    <Image source={require('../../assests/images/tron_card_pay.png')} style={{ height: 20, width: 20, marginLeft: 70 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <Image source={require('../../assests/images/logo_visa_pay.png')} style={{ height: 13, width: 40 }} />
                    <Text style={{ fontSize: 16, marginLeft: 12 }}>HDFC Bank  **** **** **** 6246</Text>
                    <Image source={require('../../assests/images/tron_card_pay.png')} style={{ height: 20, width: 20, marginLeft: 65 }} />
                </View>
                <TouchableOpacity onPress={handleNavigate} style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#D2EAFF', height: 28, width: 28, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'blue' }}>+</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}>Add New Cart</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 22, fontWeight: '600', marginVertical: 20 }}>UPI</Text>
            <View style={styles.upi_pay}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assests/images/google_pay.png')} style={{ height: 28, width: 35 }} />
                    <Text style={{ fontSize: 16, marginLeft: 10 }}>Google Pay</Text>
                    <Image source={require('../../assests/images/tron_card_pay.png')} style={{ height: 20, width: 20, marginLeft: 195 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <Image source={require('../../assests/images/phone_pay.png')} style={{ height: 28, width: 30 }} />
                    <Text style={{ fontSize: 16, marginLeft: 12 }}>PhonePe</Text>
                    <Image source={require('../../assests/images/tron_card_pay.png')} style={{ height: 20, width: 20, marginLeft: 213 }} />
                </View>
                <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#D2EAFF', height: 28, width: 28, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'blue' }}>+</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}>Add New UPI ID</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.detail_pay}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: '600', fontSize: 20, marginLeft: 10 }}>$455.00</Text>
                    <Text style={{ marginLeft: 10, fontSize: 16, color: '#2095FD' }}>View detailed bill</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("PaymentSuccess")}>
                    <View style={{ height: 50, width: 140, backgroundColor: '#027FEE', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#FFF' }}>Proceed to Pay</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.method_pay}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,justifyContent:'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/images/wallet_pay.png')} style={{ height: 20 }} />
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>Wallet</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../assests/images/nextp.png')} style={{ height: 20 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,justifyContent:'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/images/bank_pay.png')} style={{ height: 20 }} />
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>Net Banking</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../assests/images/nextp.png')} style={{ height: 20 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/images/money_pay.png')} style={{ height: 20 }} />
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>Cash of Delivery</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../assests/images/nextp.png')} style={{ height: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>

            </View>
            {/* Nội dung khác */}
            <View>
                <Text>...</Text>
            </View>
        </ScrollView>
    );
};

export default Payment;
const styles = StyleSheet.create({
    body_pay: {
        padding: 22,
        backgroundColor: '#EAEDF4',
    },

    back_pay: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerbut_pay: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        borderRadius: 50,
    },
    headertex_pay: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 10,
    },
    info_pay: {
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 200,
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    info_image: {
        height: 140,
        width: 140,
    },
    infoct: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    offers_pay: {
        backgroundColor: '#FFF',
        height: 50,
        width: '100%',
        borderRadius: 10,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    card_pay: {
        backgroundColor: '#FFF',
        height: 150,
        width: '100%',
        borderRadius: 10,
        padding: 15,
    },
    upi_pay: {
        backgroundColor: '#FFF',
        height: 150,
        width: '100%',
        borderRadius: 10,
        padding: 15,
    },
    detail_pay: {
        backgroundColor: '#FFF',
        height: 80,
        width: '100%',
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    method_pay: {
        backgroundColor: '#FFF',
        height: 125,
        width: '100%',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    }
});
