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
    ImageBackground,
    KeyboardAvoidingView


} from 'react-native';
import { LoginAPI } from '../stores/LoginStore/LoginActions';
import { useDispatch, useSelector, useStore } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
const ForgotScreen = ({ navigation }) => {
    const counter = useSelector((state) => state.loginReducers)
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()
    return (
        <>
            <StatusBar
                hidden={true} />

            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <ImageBackground
                    source={require('../assets/drawables/login/bg_main.png')}
                    resizeMode="cover"
                    style={{
                        flex: 1,

                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 45, paddingBottom: 16 }}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/drawables/login/arrow_white.png')}
                                style={{
                                    marginHorizontal: 10
                                }}
                            />
                        </TouchableOpacity>

                        <Text
                            style={{
                                color: '#fff',
                                fontFamily: 'SFProDisplay-Bold',
                                fontSize: 16,

                            }}>QUÊN MẬT KHẨU</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View
                            style={{
                                flexDirection: 'column',
                                width: 380,
                                height: 195,
                                backgroundColor: '#fff',
                                borderRadius: 8,
                                paddingHorizontal: 35,
                                paddingVertical: 40,
                            }}
                        >
                            <View style={{paddingBottom: 40}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}>
                                    <Image
                                        source={require('../assets/drawables/login/user_0072bc.png')}
                                    />
                                    <TextInput
                                        placeholder="Email hoặc Số điện thoại"
                                        value={username}
                                        onChangeText={text => setUsername(text)}
                                        style={{
                                            color: '#ffffff',
                                            paddingLeft: 10
                                        }}
                                    />
                                </View>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: " #CCCCCC" }}></View>
                            </View>

                            
                            <View style={{ alignItems: 'center' }}>
                                <LinearGradient colors={['#6AB3E2', '#0072BC']}
                                    style={{
                                        width: 200,
                                        height: 30,
                                        borderRadius: 20,
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("OTPScreen")}
                                        style={{
                                            borderRadius: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text style={{ color: "#ffffff", padding: 5 }}>Khôi Phục MẬT KHẨU</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>

                        </View>

                    </View>


                </ImageBackground>
            </View>

        </>
    )
}


export default ForgotScreen;