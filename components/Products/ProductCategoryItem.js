import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Pressable, Image } from 'react-native'

const ProductCategoryItem = ({ categoryName, imageUrl, onPressItem }) => {

    return (
        <Pressable style={styles.viewRoot} onPress={() => onPressItem()}>
            <View style={styles.viewItem}>
                <Image
                    style={styles.image}
                    source={{ uri: `http://dev-rohto-cmsapi.niw.com.vn/` + imageUrl }}
                />

                <View style={styles.viewCategory}>
                    <Text style={styles.categoryName}>{categoryName}</Text>
                    <View style={styles.viewLine}/>
                </View>

            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    viewRoot: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 15
    },

    viewItem: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 20
    },
    categoryName: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'SFProDisplay-Semibold',
    },

    viewCategory: {
        marginLeft: 10,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    viewLine: {
        borderBottomColor: '#EE2D33',
        borderBottomWidth: 3,
        width: 25,
        marginTop: 5
    },

})

export default ProductCategoryItem