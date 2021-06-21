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
const LoginScreen = ({ navigation }) => {
    const counter = useSelector((state) => state.loginReducers)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(true)
    return (
        <>
            <StatusBar
                hidden={true} />

            <View style={styles.background}>
                <ImageBackground
                    source={require('../assets/drawables/login/bg_login.png')}
                    resizeMode="cover"
                    style={styles.imageBackground}>
                    <Image
                        source={require('../assets/drawables/login/logo.png')}
                        style={styles.imageLogo}
                    />
                    <KeyboardAvoidingView style={styles.keyboardAvoidingView}
                        keyboardVerticalOffset={-150}
                        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                    >
                        <View style={styles.container}>
                            <View style={styles.account}>
                                <View style={styles.element}>
                                    <Image
                                        source={require('../assets/drawables/login/user15.png')}
                                        style={styles.iconTextInput}
                                    />
                                    <TextInput placeholder="Email hoặc Số điện thoại"
                                        placeholderTextColor="#ffffff"
                                        value={username}
                                        onChangeText={text => setUsername(text)}
                                        style={styles.textInput}
                                    />
                                </View>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ffffff" }}></View>


                                <View style={styles.element}>
                                    <Image
                                        source={require('../assets/drawables/login/lock2.png')}
                                        style={styles.iconTextInput}
                                    />
                                    <TextInput placeholder="Mật khẩu"
                                        placeholderTextColor="#ffffff"
                                        value={password}
                                        secureTextEntry={visible}
                                        onChangeText={text => setPassword(text)}
                                        style={styles.textInput}
                                    />
                                    <TouchableOpacity
                                        onPress={() => {
                                            setVisible(!visible)

                                        }}
                                        style={styles.showPassword}
                                    >
                                        <Image
                                            source={require('../assets/drawables/login/eye3.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ffffff" }}></View>
                            </View>
                            <View style={styles.element}>
                                <LinearGradient colors={['#6AB3E2', '#0072BC']}
                                    style={styles.gradient}
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            // if (username == "" || password == "") {
                                            //     Alert.alert("Email và số điện thoại không được để trống")
                                            // } else {
                                                LoginAPI(dispatch, "0967283495", "123456Aa@");
                                                // if (counter.status == "success") {
                                                    navigation.navigate("Home")
                                                // }
                                                // else {
                                                //     Alert.alert("Email và số điện thoại không tồn tại")
                                                  
                                                // }
                                            // }

                                        }}
                                        style={styles.buttonLogin}
                                    >
                                        <Text style={styles.textLogin}>Đăng nhập</Text>
                                    </TouchableOpacity>
                                </LinearGradient>

                                <TouchableOpacity
                                    style={styles.glade}
                                >
                                    <Image
                                        source={require('../assets/drawables/login/faceId.png')}
                                    ></Image>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../assets/drawables/login/finger.png')}
                                    ></Image>
                                </TouchableOpacity>

                            </View>

                            <View style={styles.selection}>
                                <View style={styles.line}></View>
                                <Text
                                    style={styles.textToLine}
                                >HOẶC</Text>
                                <View style={styles.line}></View>
                            </View>
                        </View>
                        <View style={styles.iconFG}>
                            <TouchableOpacity
                                style={{ paddingRight: 30 }}
                            >
                                <Image
                                    source={require('../assets/drawables/login/facebook.png')}
                                ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/drawables/login/google.png')}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textAccount}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("ForgotScreen")
                                }}
                            >
                                <Text
                                    style={{ color: '#fff', paddingRight: 60 }}
                                >Quên mật khẩu?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text
                                    style={{ color: '#fff', paddingLeft: 60 }}
                                >Đăng ký tài khoản</Text>
                            </TouchableOpacity>

                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    imageBackground: {
        flex: 1
    },
    imageLogo: {
        margin: 20
    },
    keyboardAvoidingView: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 35, justifyContent: 'flex-end'
    },
    account: {
        paddingBottom: 32
    },
    element: {
        flexDirection: 'row',

    },
    iconTextInput: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        color: '#ffffff',
        paddingLeft: 10,
        flex: 1
    },
    showPassword: {
        justifyContent: 'center'
    },
    gradient: {
        width: 200,
        height: 30,
        borderRadius: 20,

    },
    buttonLogin: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogin: {
        color: "#ffffff",
        padding: 5
    },
    glade: {
        paddingHorizontal: 30
    },
    selection: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 21
    },
    line:{
        borderBottomWidth: 2,
        borderBottomColor: "#ffffff",
        width: 140
    },
    textToLine: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
    },
    iconFG: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    textAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    }
})
export default LoginScreen;