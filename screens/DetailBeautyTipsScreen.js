import React, { Component } from 'react'
import {
    View, StyleSheet, ScrollView
} from 'react-native'
import { WebView } from 'react-native-webview'

const DetailBeautyTipsScreen = () => {
    return (
        <View style={{
            backgroundColor: '#0072bc', paddingHorizontal: 16, paddingVertical: 10
        }}>

            <View style={styles.container}>

                <WebView
                    style={styles.webview}
                    scrollEnabled={false}
                    source={{
                        uri: 'https://stackoverflow.com/questions/59678253/why-startactivityintent-failed-logcat-show-w-activitythread-handlewindowvisi'
                    }} />
            </View>

        </View>
    )
}
export default DetailBeautyTipsScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white'
    },
    webview: {
         flex: 1,
        backgroundColor: '#0072bc'
    }
})