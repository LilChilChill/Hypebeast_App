import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Entypo } from '@expo/vector-icons';
import { useNaviagtion, useNavigation } from '@react-navigation/native';


const Shoes = props => {
    return (
        <TouchableOpacity style={styles.shoesContainer} onPress={props.onClick}>
            <Image source={props.img} style={styles.shoesImg} />
            <Text style={styles.shoesText}>{props.children}</Text>
            <View opacity={0.4}>
                <Text style={styles.shoesText}>{props.cost}</Text>
            </View>
        </TouchableOpacity>
    );
};


const HomeScreen = ({ navigation }) => {

    const [value, setValue] = React.useState(0);

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
                <View style={styles.actions}>
                    <SafeAreaView>
                        <View style={styles.actionWrapper}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{ marginRight: 'auto' }}>
                                <View style={styles.action}>
                                    <AntDesign name="leftcircle" size={24} color="black" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}>
                                <View style={styles.action}>
                                    <Entypo name="share-alternative" size={24} color="black" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}>
                                <View style={styles.action}>
                                    <AntDesign name="hearto" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.tabs}>
                            {[
                                { name: 'Overview' },
                                { name: 'Reviews' },
                            ].map(({ name }, index) => {
                                const isActive = index === value;

                                return (
                                    <TouchableOpacity
                                        key={name}
                                        onPress={() => {
                                            setValue(index);
                                        }}
                                        style={styles.tabsItemWrapper}>
                                        <View style={styles.tabsItem}>
                                            <Text
                                                style={[
                                                    styles.tabsItemText,
                                                    isActive && { color: '#F26463' },
                                                ]}>
                                                {name}
                                            </Text>

                                        </View>

                                        {isActive && <View style={styles.tabsItemLine} />}
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                    </SafeAreaView>
                </View>
                <Image style={styles.imageProduct} source={require('../../../assets/images/Nike1.png')}></Image>

                <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
                    <View style={styles.photos}>

                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Nike Men's Air Max</Text>

                        <View style={styles.headerRow}>
                            <View style={styles.headerLocation}>
                                <FontAwesome name="map-pin" size={24} color="black" />

                                <Text style={styles.headerLocationText}>
                                    HaNoi
                                </Text>
                            </View>

                            <Text style={styles.headerPrice}>$65.00</Text>
                        </View>

                        <View style={styles.headerRow}>
                            <View style={styles.headerStars}>
                                <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                                <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                                <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                                <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                                <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />

                                <Text style={styles.headerStarsText}>20 reviews</Text>
                            </View>

                            <Text style={styles.headerDistance}>4.6 miles</Text>
                        </View>
                    </View>
                    <View style={styles.picker}>
                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}
                            style={styles.pickerDates}>
                            <AntDesign name="calendar" size={24} color="black" />

                            <Text style={styles.pickerDatesText}>11 Mar - 12 Mar</Text>
                            <Text style={styles.comingText}>ComingSoon</Text>
                        </TouchableOpacity>




                    </View>
                    <View style={styles.about}>
                        <Text style={styles.aboutTitle}>Description</Text>

                        <Text style={styles.aboutDescription}>
                            The Nike Air Max 270 Running Shoe is designed for maximum support of the entire foot. The Max Air unit on the heel offers reactive cushioning kilometer after kilometer. Articulated flex grooves to optimize forefoot flexibility. Rubber sole for ideal traction and resistance
                            {'\n'} Features:{'\n'}
                            <Entypo name="dot-single" size={24} color="black" />
                            Breathable mesh is placed at the forefoot and along the collar for a comfortable feel{'\n'}
                            <Entypo name="dot-single" size={24} color="black" />
                            Touch points at the heel and tongue create a natural feel as you take them on and off{'\n'}
                            <Entypo name="dot-single" size={24} color="black" />
                            Computer-generated outsole design creates durable traction and a natural piston effect as you run{'\n'}
                            <Entypo name="dot-single" size={24} color="black" />
                            Foam midsole delivers a softer ride{'\n'}
                            <Entypo name="dot-single" size={24} color="black" />
                            100% recycled polyester laces{'\n'}

                        </Text>
                    </View>
                </ScrollView>

                <View style={styles.overlay}>
                    <View style={styles.footer}>
                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}
                            style={{ flex: 1, paddingHorizontal: 8 }}>
                            <View style={styles.btnSecondary}>
                                <Text style={styles.btnSecondaryText}>Add to Cart</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rate}>
                    <View style={styles.rateHeader}>
                        <Text style={{
                            fontSize: 22,
                            marginLeft: 30,
                            color: 'rgb(184, 113, 33)'
                        }}>4.99</Text>
                        <View style={styles.headerStars}>
                            <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                            <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                            <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                            <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />
                            <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        </View>
                        <View style={styles.staticNumber}><Text style={{ fontWeight: '700', fontSize: 17, }}>4444 Ratings</Text></View>
                    </View>
                    <View style={styles.numberRate}>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: 17, }}>5<FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={17} /> </Text>
                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />
                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />
                        <Text style={{ fontSize: 18, color: 'rgb(184, 113, 33)', marginLeft: 10, fontWeight: '700' }}>99%</Text>

                    </View>
                    <View style={styles.numberRate}>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: 17, }}>4<FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={17} /> </Text>
                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />
                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />

                        <Text style={{ fontSize: 18, color: 'rgb(184, 113, 33)', marginLeft: 10, fontWeight: '700' }}>1%</Text>

                    </View>
                    <View style={styles.numberRate}>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: 17, }}>3<FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={17} /> </Text>
                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />
                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />

                        <Text style={{ fontSize: 18, color: 'rgb(184, 113, 33)', marginLeft: 10, fontWeight: '700' }}>0%</Text>

                    </View>
                    <View style={styles.numberRate}>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: 17, }}>2<FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={17} /> </Text>
                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />

                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />
                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />

                        <Text style={{ fontSize: 18, color: 'rgb(184, 113, 33)', marginLeft: 10, fontWeight: '700' }}>0%</Text>

                    </View>
                    <View style={styles.numberRate}>
                        <Text style={{ fontWeight: '500', color: 'black', fontSize: 17, }}>1<FontAwesome style={styles.star} color="#f26463" name="star" solid={true} size={17} /> </Text>

                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />
                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />
                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />
                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />
                        <FontAwesome style={styles.star} color="#f26463" name="star" size={14} />

                        <Text style={{ fontSize: 18, color: 'rgb(184, 113, 33)', marginLeft: 10, fontWeight: '700' }}>0%</Text>

                    </View>
                    <View style={styles.rateComments}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <FontAwesome name="user-circle" size={24} color="black" />
                            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: '600' }}>Melissa Peters</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20, }}>
                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />

                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />

                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />

                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />
                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />
                        </View>

                        <Text style={{ marginRight: 50, marginVertical: 20, width: 490, fontWeight: '600' }}>My Nike sneakers so comfortable and stylish!</Text>
                        <View style={styles.likeComments}>
                            <TouchableOpacity>
                            <AntDesign name="like1" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, marginLeft: 5, marginRight: 60, fontWeight: '700' }}>444 Likes</Text>
                            <TouchableOpacity>
                            <FontAwesome name="comment" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: '700', marginLeft: 5 }}>Comments</Text>
                        </View>


                    </View>
                    <View style={styles.rateComments}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <FontAwesome name="user-circle" size={24} color="black" />
                            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: '600' }}>Gordon Ramsay</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20, }}>
                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />

                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />

                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />

                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />
                            <FontAwesome style={styles.starCom} color="rgb(184, 113, 33)" name="star" solid={true} size={14} />
                        </View>

                        <Text style={{ marginRight: 50, marginVertical: 20, width: 390, fontWeight: '600' }}>Excellent support for workouts. Perfect for running outdoor activities</Text>
                        <View style={styles.likeComments}>
                            <TouchableOpacity>
                            <AntDesign name="like1" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, marginLeft: 5, marginRight: 60, fontWeight: '700' }}>12 Likes</Text>
                            <TouchableOpacity>
                            <FontAwesome name="comment" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: '700', marginLeft: 5 }}>Comments</Text>
                        </View>


                    </View>


                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>YOU MIGHT ALSO LIKE</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Shoes img={require('../../../assets/images/Nike2.png')} cost="$110">Nike Air Max Dia</Shoes>
                            <Shoes img={require('../../../assets/images/Nike3.png')} cost="$150">Nike Epic React Flyknit 2</Shoes>
                            <Shoes img={require('../../../assets/images/Nike4.png')} cost="$150">Nike Premium </Shoes>
                            <Shoes img={require('../../../assets/images/Nike5.png')} cost="$150">Nike HyperCore</Shoes>
                            <Shoes img={require('../../../assets/images/Nike6.png')} cost="$150">Nike Angel</Shoes>

                        </ScrollView>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rate: {
        marginLeft: 90,
    },
    numberRate: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 90,

    },

    rateHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
        justifyContent: 'center',
        marginRight: 120,

    },
    rateComments: {
        marginHorizontal: -50,
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: 'black',
        paddingVertical: 30,
        marginRight: 40,
        
    },

    starCom: {
        marginHorizontal: 5,
    },
    likeComments: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    staticNumber: {
        fontWeight: '600',
        fontSize: 17,
        marginLeft: 40,
    },
    overlay: {
        position: 'absolute',
        bottom: 400,
        left: 0,
        right: 0,
        top: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingHorizontal: 16,
        paddingBottom: 48,


    },
    actions: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    actionWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: -8,
        marginBottom: 12,
        marginTop: 30,
    },
    photos: {
        marginTop: -150,

        position: 'relative',
        height: 240,
        overflow: 'hidden',
        borderRadius: 12,
    },
    photosImg: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        width: '100%',
        height: 240,
        borderRadius: 12,
    },
    photosPagination: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: '#242329',
        borderRadius: 31,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    photosPaginationText: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18,
        color: '#ffffff',
    },
    header: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 32,
        color: '#242329',

    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    headerLocation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLocationText: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#7b7c7e',
        marginLeft: 4,
    },
    headerPrice: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 32,
        textAlign: 'right',
        color: '#rgb(184, 113, 33)',
    },
    star: {
        color: 'rgb(184, 113, 33)',
    },
    headerStars: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    headerStarsText: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#rgb(184, 113, 33)',
    },
    headerDistance: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#7b7c7e',
    },
    picker: {
        marginTop: 6,
        marginHorizontal: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        height: 48,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderStyle: 'solid',
        borderRadius: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pickerDates: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickerDatesText: {
        marginLeft: 8,
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 18,
        color: '#242329',
    },
    pickerFilter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickerFilterWrapper: {
        borderLeftWidth: 1,
        borderColor: '#e5e5e5',
        paddingLeft: 12,
    },
    pickerFilterItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    pickerFilterItemText: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',
        color: '#242329',
        marginLeft: 4,
    },
    stats: {
        marginVertical: 16,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statsItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statsItemText: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 18,
        color: '#242329',
        marginLeft: 7,
    },
    about: {
        marginHorizontal: 20,
    },
    aboutTitle: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 32,
        color: '#242329',
        marginVertical: 20,

    },
    aboutDescription: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        color: '#7b7c7e',
    },
    footer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    comingText: {
        marginLeft: 30,

    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 36,
        borderWidth: 1,
        backgroundColor: '#242329',
        borderColor: '#242329',
        height: 52,
    },
    btnSecondary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: 'rgb(184, 113, 33)',
        borderColor: 'rgb(184, 113, 33)',
        height: 52,
    },
    btnSecondaryText: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '700',
        color: '#fff',
    },
    btnText: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '700',
        color: '#fff',
    },
    action: {
        width: 36,
        height: 36,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderStyle: 'solid',
        borderRadius: 12,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        flexDirection: 'row',
        paddingHorizontal: 0,
    },
    imageProduct: {
        height: 240,
        width: 390,
        borderRadius: 50,
    },
    tabsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 4,
    },
    tabsItemLine: {
        width: 20,
        height: 3,
        backgroundColor: '#f26463',
        borderRadius: 24,
    },
    tabsItemWrapper: {
        marginRight: 28,
    },
    tabsItemText: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: '#7b7c7e',
    },
    shoesContainer: {
        marginHorizontal: 10,
        marginBottom: 90,
       
    },
   
    shoesImg: {
        width: 175,
        height: 175
    },
    shoesText: {
        fontSize: 16

    },
    title: {
        fontSize: 24,
        // fontFamily: 'Anton-Regular',
        marginVertical: '3%',
        marginLeft: 70,
        marginTop:70,
    }
});
export default HomeScreen
