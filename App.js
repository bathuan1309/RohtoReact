import React from 'react';
import {
  StyleSheet,
  StatusBar
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import rootReducer from './stores/rootReducer'

import { LoginScreen, ListProductsScreen } from './screens';
import HomeTab from './navigations/tabs';

const THEME_COLOR = 'white';
const Stack = createStackNavigator();
const store = configureStore({ reducer: rootReducer })
const App = () => {


  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor={THEME_COLOR} />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false

            }}>

            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Home"
              component={HomeTab}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ListProductsScreen"
              component={ListProductsScreen}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
