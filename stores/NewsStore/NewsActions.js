import { AsyncStorage} from "react-native";

export const getListNews = async (dispatch) => {
    let TOKEN = await AsyncStorage.getItem("token")

    let response = await fetch('http://dev-rohto-app-api.niw.com.vn/api/ContentNew/List', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + TOKEN
        },
        body: JSON.stringify({
            pageIndex: 1,
            pageSize: 10,

        }),
    });
    response = await response.json();
    console.log('listNews', response.data);
    dispatch({ type: 'listNews', response })

}

export const getBeautyTips = async (dispatch) => {

    let TOKEN = await AsyncStorage.getItem("token")
    let response = await fetch('http://dev-rohto-app-api.niw.com.vn/api/ContentBQLD/List', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + TOKEN
        },
        body: JSON.stringify({
            pageIndex: 1,
            pageSize: 10,

        }),
    });
    response = await response.json();
    console.log('beautyTips', response.data);
    dispatch({ type: 'beautyTips', response })

}
