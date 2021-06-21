import Moment from 'moment';
import { AsyncStorage } from "react-native";

export function formatDate(date) {
    return(Moment(date).format('DD/MM/yyyy HH:mm:ss'))
}

// export const getToken = async () => {
//     export const TOKEN = {
//         TOKEN: JSON.parse(await AsyncStorage.getItem("token"))
//     }
// }
