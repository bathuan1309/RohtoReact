import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Dimensions,
    ImageBackground,
    Pressable,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getListProducts } from "../stores/ProductsStore/ProductActions";
import NumberFormat from 'react-number-format';


let category

const ListProductsScreen = ({route, navigation}) => {

    const data = useSelector((state) => state.productReducers)

    const dispatch = useDispatch()

    React.useEffect(() => {
        let {categoryId, categoryName} = route.params
        category = categoryName
        getListProducts(dispatch, categoryId)
    }, [])

    let dataProducts = data.listProducts

    console.log(dataProducts)


    return (

        <View style={{ flex: 1, backgroundColor: '#0072BC' }}>
            <View style={styles.toolBar}>
                <View style={styles.overLay}>
                    <Image
                        source={require('../assets/drawables/ic_rectangle/ic_rectangle.png')}
                        resizeMode="cover"
                        style={styles.imageBackground}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginRight: 15 }}>
                    <Pressable style={{ padding: 15, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => navigation.goBack()}>
                        < Image
                            source={require('../assets/drawables/ic_back_0072bc/ic_back_0072bc.png')}

                        />
                    </Pressable>

                    <View style={styles.boxSearch}>
                        <TextInput placeholder="Tìm kiếm"
                            placeholderTextColor="#999999"
                            style={styles.textInputSearch}
                        />
                        < Image
                            source={require('../assets/drawables/ic_search/ic_search.png')}
                            style={styles.imageSearch}
                        />
                    </View>
                </View>

            </View>

            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/drawables/login/bg_main.png')}
                    resizeMode="cover"
                    style={{flex: 1}}>
                    <View style={styles.scrollView}>

                        <Text style={styles.textScrollView}>Sản phẩm</Text>
                        <Image
                            style={styles.imageFourPoint}
                            source={require('../assets/drawables/ic_four_point/ic_four_point.png')}
                        />
                        <Text style={styles.textScrollView}>{category}</Text>
                    </View>
                    <View style={styles.viewLine} />

                    <View style={{ marginHorizontal: 10 }}>
                        <FlatList
                            data={dataProducts}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <View
                                        style={(index !== (dataProducts.length - 1) && dataProducts.length % 2 !== 0) ? styles.viewItemFlatList : styles.viewItemLastFlatList}
                                    >
                                        <Image
                                            style={styles.imageItemFlatList}
                                            source={{ uri: `http://dev-rohto-cmsapi.niw.com.vn/` + item.avatar }}
                                            resizeMode='center'
                                        />

                                        <Text style={styles.titleItem} numberOfLines={2}>{item.name.vi}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <NumberFormat
                                                value={item.price}
                                                displayType={'text'}
                                                decimalScale={3}
                                                thousandSeparator={true}
                                                renderText={a =>
                                                    <Text style={styles.priceItem}>{a.replace(/,/g, ".")}</Text>
                                                }
                                            />
                                            <Text style={styles.unitItem}>đ/ {item.unit.vi}</Text>
                                        </View>

                                    </View>
                                )

                            }}
                            ListHeaderComponent={
                                <View
                                    style={{ marginTop: 10 }}
                                />
                            }
                            ListFooterComponent={
                                <View
                                    style={{ marginBottom: 50 }}
                                />
                            }
                        />
                    </View>
                </ImageBackground>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    overLay: {
        height: 40,
        width: "100%",
        position: "absolute",

    },
    imageBackground: {
        height: 50
    },

    toolBar: {
        backgroundColor: 'white',
        height: 55,
    },


    boxSearch: {
        borderRadius: 25,
        backgroundColor: 'white',
        flex: 1,
        marginVertical: 8,
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E8E8E8'
    },

    textInputSearch: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 10,

    },

    imageSearch: {
        margin: 10,
        alignSelf: "center"
    },

    scrollView: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',

    },

    textScrollView: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: 'SFProDisplay-Bold',
    },

    imageFourPoint: {
        marginHorizontal: 7
    },

    viewLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
    },

    viewItemFlatList: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 5,
        marginBottom: 10,
        flex: 0.5,
        height: 250,
        padding: 10
    },
    viewItemLastFlatList: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginLeft: 5,
        marginRight: 30,
        marginBottom: 10,
        flex: 0.5,
        height: 250,
        padding: 10,
    },

    imageItemFlatList: {
        height: 140
    },

    titleItem: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        color: 'black',
        marginVertical: 15,

    },
    priceItem: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 12,
        color: 'red',
        marginRight: 5,
    },

    unitItem: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 12,
        color: 'black',

    }

})

export default ListProductsScreen;