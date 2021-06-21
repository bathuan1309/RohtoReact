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
    ImageBackground
} from 'react-native';
import { getListNews, getBeautyTips } from '../stores/NewsStore/NewsActions';
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Slider, SliderNews, ToolbarMain } from '../components'
import { FlatList } from 'react-native-gesture-handler';
import { formatDate } from "../Utils/Toolbox";



const NewsScreen = () => {
    const data = useSelector((state) => state.newsReducers)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getListNews)
        dispatch(getBeautyTips)
    }, [])

    let dataListNews = data.listNews

    let dataBeautyTips = data.beautyTips

    return (


        <View style={{ flex: 1 }}>
            <ToolbarMain />
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/drawables/login/bg_main.png')}
                    resizeMode="cover"
                    style={{ flex: 1 }}>
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <View>
                            <View style={styles.viewHeader}>
                                <Text style={styles.textHeader}>Tin tức</Text>
                                <Image
                                    style={styles.imageHeader}
                                    source={require('../assets/drawables/circleRightWhite/circleRightWhite.png')}
                                />
                            </View>

                            <SliderNews data={dataListNews} />
                            {/* <Text>{counter?.data?.list[0]?.newId}</Text> */}

                            <View style={styles.viewHeader}>
                                <Text style={styles.textHeader}>Bí quyết làm đẹp</Text>
                                <Image
                                    style={styles.imageHeader}
                                    source={require('../assets/drawables/circleRightWhite/circleRightWhite.png')}
                                />
                            </View>

                            <View style={styles.viewFlatList}>
                                <FlatList
                                    data={dataBeautyTips}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item, index }) => {
                                        if (item.statusShow) {
                                            return (
                                                <View>
                                                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20 }}>
                                                        <Image
                                                            style={styles.imageItemBeautyTips}
                                                            source={{ uri: `http://dev-rohto-cmsapi.niw.com.vn/` + item.avatar }}
                                                        />
                                                        <View style={{ marginLeft: 10, flex: 1 }}>
                                                            <Text style={styles.titleItem}>{item.title.vi}</Text>
                                                            <Text style={styles.timeItem}>{formatDate(item.createTime)}</Text>
                                                        </View>
                                                    </View>
                                                    {(index == dataBeautyTips.length - 1) ? null : <View style={styles.viewLine} />}

                                                </View>
                                            )
                                        }
                                    }}
                                />
                            </View>

                        </View>
                        <View><Text></Text></View>
                    </ScrollView>

                </ImageBackground>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    scrollView: {

        paddingHorizontal: 16,
    },

    viewHeader: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        marginBottom: 15
    },

    textHeader: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: 'SFProDisplay-Semibold',
        flex: 1,
        marginLeft: 5
    },

    imageHeader: {
        justifyContent: 'flex-end',
    },

    viewFlatList: {
        backgroundColor: 'white',
        borderRadius: 8
    },

    imageItemBeautyTips: {
        width: 80,
        height: 80,
        borderRadius: 8
    },

    viewLine: {
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 1,
    },

    titleItem: {
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: 14,
        color: 'black',
        marginBottom: 5,
    },

    timeItem: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 12,
        color: '#999999'
    }
})

export default NewsScreen;