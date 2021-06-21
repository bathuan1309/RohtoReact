import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')


const SliderItem = ({ item, index }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: `http://dev-rohto-cmsapi.niw.com.vn/` + item.avatar }} />

            <Text style={styles.itemTitle}> {item.title.vi}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 32,
        height: 250,
        backgroundColor: 'white',
        borderRadius: 8,
        
    },
    image: {
        width: width - 32,
        height: 180,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    itemTitle: {
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: 14,
        color: 'black',
        marginVertical: 15,
        marginHorizontal: 12
    },

})

export default SliderItem