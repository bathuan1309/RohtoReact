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
    StatusBar,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getDetailProduct, getRelateProduct } from "../stores/ProductsStore/ProductActions";
import { Slider } from "../components";
import NumberFormat from 'react-number-format';

const DetailProductScreen = ({ navigation }) => {

    const counter = useSelector((state) => state.productReducers)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getRelateProduct)

    }, [])

    let dataRelateProduct = counter?.data.list
    console.log(dataRelateProduct)

    let data

    const [textShown, setTextShown] = useState(false);
    const [lengthMore, setLengthMore] = useState(false);
    const toggleNumberOfLines = () => {
        setTextShown(!textShown);
    }

    const onTextLayout = React.useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 3);

    }, []);

    return (

        <View style={{ flex: 1, backgroundColor: '#0072BC' }}>
            <ScrollView style={styles.scrollView}>
                {/* <View style={styles.viewDetailProduct}>

                    <Text style={styles.nameDetail} numberOfLines={2}>{dataDetailProduct.name?.vi}</Text>

                    <Slider data={dataDetailProduct.images} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <NumberFormat
                            value={dataDetailProduct.price}
                            displayType={'text'}
                            decimalScale={3}
                            thousandSeparator={true}
                            renderText={a =>
                                <Text style={styles.priceDetail}>{a.replace(/,/g, ".")}</Text>
                            }
                        />
                        <Text style={styles.unitDetail}>đ/ {dataDetailProduct.unit?.vi}</Text>
                    </View>

                    <Text style={styles.textIntro}>Giới thiệu</Text>

                    <Text
                        style={styles.contentDetail}
                        onTextLayout={onTextLayout}
                        numberOfLines={textShown ? undefined : 3}
                    >{dataDetailProduct.content.vi}</Text>

                    <Text style={styles.textSeeMore} onPress={toggleNumberOfLines}>{textShown ? 'Thu gọn...' : 'Xem thêm...'}</Text>
                </View> */}

                <View>
                    <Text style={styles.textHeader}>Sản phẩm liên quan</Text>
                   
                    <FlatList
                        data={dataRelateProduct}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.viewItemLastFlatList}>
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

                        }}/>
                </View>

            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 16,
        paddingTop: 10
    },

    viewDetailProduct: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8
    },

    nameDetail: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'SFProDisplay-Semibold',
    },

    priceDetail: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 12,
        color: 'red',
        marginRight: 5,
    },

    unitDetail: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 12,
        color: 'black',

    },

    textIntro: {
        color: '#9B9BA5',
        fontSize: 12,
        fontFamily: 'SFProDisplay-Bold',
        textTransform: 'uppercase',
        marginVertical: 15
    },

    contentDetail: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'SFProDisplay-Regular',

    },

    textSeeMore: {
        color: '#0072BC',
        fontSize: 14,
        fontFamily: 'SFProDisplay-Regular',
        alignSelf: 'flex-end',
        marginVertical: 5
    },

    viewItemFlatList: {
        backgroundColor: 'white',
        borderRadius: 8,
       
        marginBottom: 10,
        flex: 0.5,
        height: 250,
        padding: 10
    },

    textHeader: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: 'SFProDisplay-Bold',
        marginBottom: 15
    },

    viewItemLastFlatList: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginLeft: 5,
        marginRight: 30,
        marginBottom: 10,
        flex: 0.5,
        height: 250,
        width: 150,
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

export default DetailProductScreen;