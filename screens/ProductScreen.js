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
    Pressable,
    ImageBackground
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ProductCategoryItem } from '../components'
import { getCategoryProduct, getCategoryService } from '../stores/ProductsStore/ProductActions';
import { useDispatch, useSelector, useStore } from 'react-redux'

const ProductScreen = ({ navigation }) => {

    const data = useSelector((state) => state.productReducers)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getCategoryProduct)
        dispatch(getCategoryService)
    }, [])

    let dataProduct = data.categoryProduct
    let dataService = data.categoryService

    const [index, setIndex] = useState(0);
    const [isShowProduct, setShowProduct] = useState(true)
    return (
        <>

            <View style={{ backgroundColor: '#0072bc', flex: 1 }}>
                <View style={styles.toolBar}>

                    <View style={styles.overLay}>
                        <Image
                            source={require('../assets/drawables/ic_rectangle/ic_rectangle.png')}
                            resizeMode="cover"
                            style={styles.imageBackground}
                        />

                    </View>
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

                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={require('../assets/drawables/login/bg_main.png')}
                        resizeMode="cover"
                        style={{ flex: 1 }}>
                        <View>
                            <View style={{ flexDirection: 'row', height: 50 }}>

                                <Pressable
                                    onPress={() => {
                                        setIndex(0)
                                        setShowProduct(true)
                                    }}
                                    style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: index == 0 ? 3 : 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.titleTabBar}>Sản phẩm</Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => {
                                        setIndex(1)
                                        setShowProduct(false)
                                    }}
                                    style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: index == 1 ? 3 : 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.titleTabBar}>Dịch vụ</Text>
                                </Pressable>

                            </View>

                            <View style={{ paddingHorizontal: 15 }}>

                                <FlatList
                                    data={isShowProduct ? dataProduct : dataService}
                                    keyExtractor={item => item.id}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View>
                                                <ProductCategoryItem
                                                    categoryName={item.name.vi}
                                                    imageUrl={item.avatar}
                                                    onPressItem={isShowProduct ? () => {
                                                        navigation.navigate("ListProductsScreen", {categoryId: item.categoryId, categoryName: item.name.vi});
                                                    } : () => {
                                                        console.log("service")
                                                    }}
                                                />
                                            </View>
                                        )
                                    }}
                                    ListHeaderComponent={
                                        <View
                                            style={{ marginTop: 15 }}
                                        />
                                    }

                                />
                                 <View><Text></Text></View>

                            </View>
                        </View>
                    </ImageBackground>
                </View>

            </View>


        </>
    )
}

const styles = StyleSheet.create({
    overLay: {
        height: 40,
        width: "100%",
        backgroundColor: "white",
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
        marginHorizontal: 15,
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E8E8E8'
    },

    textInputSearch: {
        paddingVertical: 10,
        paddingLeft: 10,
        flex: 1,

    },

    titleTabBar: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 16,
        fontFamily: 'SFProDisplay-Bold',

    },

    imageSearch: {
        margin: 10,
        alignSelf: "center"
    },
})

export default ProductScreen;