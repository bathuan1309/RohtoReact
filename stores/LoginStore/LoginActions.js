import { AsyncStorage} from "react-native";
export const LoginAPI = async (dispatch,userName,password) => {

        let response = await fetch('http://dev-rohto-app-api.niw.com.vn/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: '0987654321',
                password: '123456Aa@',
    
            }),
        });
        response = await response.json();
        console.log('Login', response);
        dispatch({ type: 'Success', response })
        await AsyncStorage.setItem('token', response.data.accessToken);
    
}

