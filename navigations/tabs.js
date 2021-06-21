import React from "react";
import {
    Image, Text, View,
    TouchableOpacity,
    Pressable, StyleSheet
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SkinAnalysisScreen, HomeScreen, NewsScreen, ProductScreen } from "../screens";

const Tab = createBottomTabNavigator();
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View
            style={{
                
                flexDirection: 'row',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                position: 'relative',
            }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index == index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let iconData = [
                    {
                        focus: require('../assets/drawables/ic_home_focus/ic_home_focus.png'),
                        normal: require('../assets/drawables/home/home5.png'),
                    },
                    {
                        focus: require('../assets/drawables/ic_analysis_skin_focus/ic_analysis_skin_focus.png'),
                        normal: require('../assets/drawables/ic_analysis_skin/ic_analysis_skin.png'),
                    },
                    {
                        focus: require('../assets/drawables/ic_camera_focus/ic_camera_focus.png'),
                        normal: require('../assets/drawables/camera/camera.png'),
                    },
                    {
                        focus: require('../assets/drawables/ic_product_focus/ic_product_focus.png'),
                        normal: require('../assets/drawables/ic_product/ic_product.png'),
                    },
                    {
                        focus: require('../assets/drawables/ic_news_focus/ic_news_focus.png'),
                        normal: require('../assets/drawables/ic_news/ic_news.png'),
                    }


                ];
                let icon = iconData[index];
                let iconName = isFocused ? icon.focus : icon.normal;

                return (
                    <Pressable
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            padding: 4,
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View style={{ flexDirection: 'column', flex: 1, alignItems: "center" }}>
                            <View style={{width: 35, height: 35, justifyContent: 'center'}}> 
                                <Image source={iconName} 
                                    style={(isFocused) ? {marginTop: -20, alignSelf: 'center'} : {alignSelf: 'center'}}
                                />
                            </View>
                            <Text
                                style={{
                                    fontFamily: 'SFProDisplay-Medium',
                                    fontSize: 12,
                                    color: 'black',
                                }}>
                                {label}
                            </Text>
                        </View>

                    </Pressable>
                );
            })}
        </View>
    );
}

const HomeTab = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
            <Tab.Navigator
               
                tabBar={(props) => <MyTabBar {...props} />}
                tabBarOptions={{ keyboardHidesTabBar: true }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Trang chủ',
                    }}
                />
                <Tab.Screen
                    name="SkinAnalysisScreen"
                    component={SkinAnalysisScreen}
                    options={{
                        title: 'Phân tích da',
                    }}
                />
                <Tab.Screen
                    name="TakePhoto"
                    component={HomeScreen}
                    options={{
                        title: 'Chụp ảnh',
                    }}
                />
                <Tab.Screen
                    name="Product"
                    component={ProductScreen}
                    options={{
                        title: 'Sản phẩm',
                    }}
                />
                <Tab.Screen
                    name="News"
                    component={NewsScreen}
                    options={{
                        title: 'Tin tức',
                    }}
                />

            </Tab.Navigator>

            <View style={styles.viewLine}></View>


        </View>

    );
};

const styles = StyleSheet.create({

    viewLine: {
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 5,
        marginVertical: 8,
        width: '40%',
        borderRadius: 8,
        alignSelf: 'center'
    }
})

export default HomeTab;
