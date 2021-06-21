import React, { useState, useEffect, useRef } from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
const OTPScreen = ({ navigation }) => {

    let textInput = useRef(null)
    const lengthInput = 6
    const [internalVal, setInternalVal] = useState("")

    const onChangeText = (val) => {
        setInternalVal(val)
    }
    useEffect(() => {
        textInput.focus()
    }, [])

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

                            }}>NHẬP MÃ XÁC NHẬN</Text>
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

                            <View style={{ flex: 1 }}>
                                <View>
                                    <TextInput
                                        ref={(input) => textInput = input}
                                        onChangeText={onChangeText}
                                        maxLength={lengthInput}
                                        returnKeyType="done"
                                        value={internalVal}
                                        keyboardType="numeric"
                                        style={{
                                            width: 0,
                                            height: 0,
                                        }}
                                    />
                                    <View style={styles.containerIndex}>
                                        {
                                            Array(lengthInput).fill().map((data, index) => (
                                                <View
                                                    key={index}
                                                    style={styles.cellView}
                                                    
                                                    >
                                                    <Text
                                                        onPress={() => textInput.focus()}
                                                        style={styles.cellText}>
                                                            {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                                        </Text>
                                                </View>
                                            ))
                                        }

                                    </View>
                                </View>
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
                                        onPress={() => navigation.navigate("CreatePasswordScreen")}
                                        style={{
                                            borderRadius: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text style={{ color: "#ffffff", padding: 5 }}>XÁC NHẬN</Text>
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

const styles = StyleSheet.create({
    containerIndex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellView: {
        paddingVertical: 11,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1.5
    },
    cellText: {
        textAlign: 'center',
        fontSize: 16
    }
})

export default OTPScreen;