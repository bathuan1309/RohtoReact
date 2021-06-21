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
import LinearGradient from 'react-native-linear-gradient';
const SkinAnalysisScreen = () => {
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
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.container}>
                        <View style={styles.avatar}>
                            <TouchableHighlight
                                style={[styles.profileImgContainer, { backgroundColor: '#CCFFFF', paddingRight: 10 }]}
                            >
                                <Image source={require('../assets/drawables/login/bg_login.png')} style={styles.profileImg} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 13, justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ color: '#0072bc', fontFamily: 'SFProDisplay-Bold', fontSize: 40 }}>1 </Text>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={{
                                    color: "#000", fontFamily: 'SFProDisplay -Semibold', fontSize: 16, paddingBottom: 5
                                }}>Khảo sát da</Text>

                                <View style={{ borderBottomWidth: 5, borderBottomColor: "#FF0000", width: 30 }}></View>
                            </View>
                            <LinearGradient colors={['#6AB3E2', '#0072BC']}
                                style={styles.gradient}
                            >
                                <TouchableOpacity
                                    style={styles.buttonLogin}
                                >
                                    <Image
                                        source={require('../assets/drawables/ic_start/play3.png')}></Image>
                                    <Text style={{
                                        color: "#ffffff",
                                        padding: 5
                                    }}>Bắt đầu</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        <View>
                            <Text>Biết chính xác loại da của bạn chỉ trong 2 phút.</Text>
                            <Text>Bạn sẽ hiểu làn da của mình hơn và nhận được các lời </Text>
                            <Text>khuyên về sản phẩm chính xác hơn.</Text>
                        </View>

                    </View>


                    <View style={styles.container}>
                        <View style={styles.avatar}>
                            <TouchableHighlight
                                style={[styles.profileImgContainer, { backgroundColor: '#CCFFFF', paddingRight: 10 }]}
                            >
                                <Image source={require('../assets/drawables/login/bg_login.png')} style={styles.profileImg} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 13, justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ color: '#0072bc', fontFamily: 'SFProDisplay-Bold', fontSize: 40 }}>2 </Text>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={{
                                    color: "#000", fontFamily: 'SFProDisplay -Semibold', fontSize: 16, paddingBottom: 5
                                }}>Khảo sát da</Text>

                                <View style={{ borderBottomWidth: 5, borderBottomColor: "#FF0000", width: 30 }}></View>
                            </View>
                            <LinearGradient colors={['#6AB3E2', '#0072BC']}
                                style={styles.gradient}
                            >
                                <TouchableOpacity
                                    style={styles.buttonLogin}
                                >
                                    <Image
                                        source={require('../assets/drawables/ic_start/play3.png')}></Image>
                                    <Text style={{
                                        color: "#ffffff",
                                        padding: 5
                                    }}>Bắt đầu</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        <View>
                            <Text>Biết chính xác loại da của bạn chỉ trong 2 phút.</Text>
                            <Text>Bạn sẽ hiểu làn da của mình hơn và nhận được các lời </Text>
                            <Text>khuyên về sản phẩm chính xác hơn.</Text>
                        </View>

                    </View>



                    <View style={styles.container}>
                        <View style={styles.avatar}>
                            <TouchableHighlight
                                style={[styles.profileImgContainer, { backgroundColor: '#CCFFFF', paddingRight: 10 }]}
                            >
                                <Image source={require('../assets/drawables/login/bg_login.png')} style={styles.profileImg} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 13, justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ color: '#0072bc', fontFamily: 'SFProDisplay-Bold', fontSize: 40 }}>3 </Text>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={{
                                    color: "#000", fontFamily: 'SFProDisplay -Semibold', fontSize: 16, paddingBottom: 5
                                }}>Khảo sát da</Text>

                                <View style={{ borderBottomWidth: 5, borderBottomColor: "#FF0000", width: 30 }}></View>
                            </View>
                            <LinearGradient colors={['#6AB3E2', '#0072BC']}
                                style={styles.gradient}
                            >
                                <TouchableOpacity
                                    style={styles.buttonLogin}
                                >
                                    <Image
                                        source={require('../assets/drawables/ic_start/play3.png')}></Image>
                                    <Text style={{
                                        color: "#ffffff",
                                        padding: 5
                                    }}>Bắt đầu</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        <View>
                            <Text>Biết chính xác loại da của bạn chỉ trong 2 phút.</Text>
                            <Text>Bạn sẽ hiểu làn da của mình hơn và nhận được các lời </Text>
                            <Text>khuyên về sản phẩm chính xác hơn.</Text>
                        </View>

                    </View>
                </View>
                </ScrollView>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 380,
        height: 260,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center'

    },
    avatar: {
        marginHorizontal: 14,
        marginVertical: 5,
    },
    profileImgContainer: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignItems: 'center'

    },
    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 50,

    },
    info: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 6,
        marginVertical: 8,
    },
    gradient: {
        width: 90,
        height: 36,
        borderRadius: 20,
        justifyContent: 'center'

    },
    buttonLogin: {
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SkinAnalysisScreen;