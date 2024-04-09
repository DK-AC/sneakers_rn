import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/screens/main';
import {CardScreen} from './src/screens/card';
import {RootStackParamList} from './src/types/navigation.types.ts';
import Hamburger from './assets/icons/Hamburger.svg';
import Basket from './assets/icons/Basket.svg';
import {Provider} from 'react-redux';
import {store} from './src/store';

export const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Main'}
          screenOptions={({route, navigation}) => ({
            headerStyle: {
              backgroundColor: route.name === 'Main' ? '#e5e5e5' : 'transparent',
            },
            headerTransparent: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Hamburger width={24} height={24} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Basket width={24} height={24} />
              </TouchableOpacity>
            ),
          })}>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              title: 'Explore',
              headerTitleStyle: styles.headerTitle,
            }}
          />
          <Stack.Screen
            name="Card"
            component={CardScreen}
            options={{
              title: 'Running',
              headerTitleStyle: styles.headerTitle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 21,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
    color: '#313B5D',
  },
});
