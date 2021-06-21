import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated, Image } from 'react-native'

const ToolbarMain = () => {
    return (
        <>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15, backgroundColor: 'white' }}>
                <Image style={{ alignSelf: 'center' }} source={require('../../assets/drawables/logo/logo.png')} />
                <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                    <Image style={{ marginHorizontal: 10 }} source={require('../../assets/drawables/ic_user/ic_user.png')} />
                    <Image style={{ marginHorizontal: 10 }} source={require('../../assets/drawables/ic_notify/ic_notify.png')} />
                    <Image style={{ marginHorizontal: 10 }} source={require('../../assets/drawables/ic_schedule/ic_schedule.png')} />
                    <Image style={{ marginHorizontal: 10 }} source={require('../../assets/drawables/search/search.png')} />
                </View>
            </View>
        </>
    )
}
export default ToolbarMain;