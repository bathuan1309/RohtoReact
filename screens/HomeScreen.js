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
    TouchableHighlight,
    ImageBackground,
} from 'react-native';
import { ToolbarMain } from '../components'
const HomeScreen = () => {
    return (
        <>
            <ToolbarMain />
            <ImageBackground
                source={require('../assets/drawables/login/bg_main.png')}
                resizeMode="cover"
                style={{
                    flex: 1
                }}
            >
                <View style={{flex: 1, alignItems: 'center' }}>
                    <View style={styles.container}>
                        <View style={styles.avatar}>
                            <TouchableHighlight
                                style={[styles.profileImgContainer, { backgroundColor: '#0072BC' , opacity: 20}]}
                            >
                                <Image source={require('../assets/drawables/login/bg_login.png')} style={styles.profileImg} />
                            </TouchableHighlight>
                        </View>


                        <View style={styles.info}>


                            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                                <Text style={{ color: '#0072bc', fontFamily: 'SFProDisplay-Bold', flex: 1, fontSize: 16 }}> ĐẶNG NGÂN </Text>
                                <Text style={{ color: "#999999", fontFamily: 'SFProDisplay-Regular' }}>Tổng điểm da</Text>
                            </View>


                            <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 13 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Image
                                        source={require('../assets/drawables/ic_tick/Tick.png')}
                                    ></Image>
                                    <Text style={{ color: "#000", fontFamily: 'SFProDisplay-Regular', paddingLeft: 7 }}>1 tuần trước</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#0072bc', fontFamily: 'SFProDisplay-Bold', fontSize: 16, paddingRight: 10 }}>4/5</Text>

                                    <Image
                                        source={require('../assets/drawables/ic_circle_right_ccc/circle-right_cccccc.png')}
                                    ></Image>
                                </View>
                            </View>


                            <View style={{ borderBottomWidth: 1, borderBottomColor: "#F0F0F0" }}></View>


                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 13 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                                    <Text style={{ color: "#999", fontFamily: 'SFProDisplay-Regular', fontSize: 12, flex: 1 }}>Loại da</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: "#999", fontFamily: 'SFProDisplay-Regular', paddingRight: 10, fontSize: 12 }}>Mục tiêu cho da</Text>

                                        <Image
                                            source={require('../assets/drawables/ic_circle_right_ccc/circle-right_cccccc.png')}
                                        ></Image>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: '#000', fontFamily: 'SFProDisplay-Bold', fontSize: 12, paddingRight: 10, flex: 1 }}>Da khô + dầu</Text>
                                    <Text style={{ color: '#000', fontFamily: 'SFProDisplay-Bold', fontSize: 12 }}>Làm săn chắc da</Text>
                                </View>
                            </View>
                        </View>


                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        height: 130,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 15,
        
    },
    avatar: {

    },
    profileImgContainer: {
        marginHorizontal: 14,
        marginVertical: 18,
        height: 80,
        width: 80,
        borderRadius: 40,

    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginHorizontal: -6,
        marginVertical: -8,
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5,
        marginRight: 10,
        marginVertical: 8,
    }
})

export default HomeScreen;