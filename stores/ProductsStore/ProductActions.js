import { AsyncStorage } from "react-native";

export const getCategoryProduct = async (dispatch) => {
    let TOKEN = await AsyncStorage.getItem("token")

    let response = await fetch(`http://dev-rohto-app-api.niw.com.vn/api/Category/List`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        body: JSON.stringify({
            pageIndex: 1,
            pageSize: 10,

        }),
    });
    response = await response.json();
    console.log('getCategoryProduct' + response);
    dispatch({ type: 'getCategoryProduct', response })

}

export const getCategoryService = async (dispatch) => {
    let TOKEN = await AsyncStorage.getItem("token")

    let response = await fetch(`http://dev-rohto-app-api.niw.com.vn/api/Service/List`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        body: JSON.stringify({
            pageIndex: 1,
            pageSize: 10,

        }),
    });
    response = await response.json();
    console.log('getCategoryService' + response);
    dispatch({ type: 'getCategoryService', response })

}

export const getListProducts = async (dispatch, categoryId) => {

    let TOKEN = await AsyncStorage.getItem("token")

    let response = await fetch('http://dev-rohto-app-api.niw.com.vn/api/Product/List', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        body: JSON.stringify({
            CategoryId: categoryId,
            pageIndex: 1,
            pageSize: 10,

        }),
    });
    response = await response.json();
    console.log('getListProducts' + response);
    dispatch({ type: 'getListProducts', response })

}

export const getDetailProduct = async (dispatch) => {

    let TOKEN = await AsyncStorage.getItem("token")

    let response = await fetch(`http://dev-rohto-app-api.niw.com.vn/api/Product/Detail?id=1118`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
    });
    response = await response.json();
    console.log('getDetailProduct' + response);
    dispatch({ type: 'getDetailProduct', response })

}


export const getRelateProduct = async (dispatch) => {
    let TOKEN = await AsyncStorage.getItem("token")

    let response = await fetch(`http://dev-rohto-app-api.niw.com.vn/api/Product/ListProductRelate?productId=0&categoryId=1099`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
    });
    response = await response.json();
    console.log('getRelateProduct' + response);
    dispatch({ type: 'Success', response })

}

