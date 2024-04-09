import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/screens/main';
import {CardScreen} from './src/screens/card';
import {RootStackParamList} from './src/types/navigation.types.ts';
import Hamburger from './assets/icons/Hamburger.svg';
import Basket from './assets/icons/Basket.svg';

export const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Main'}
        screenOptions={({route}) => ({
          headerStyle: {
            backgroundColor: route.name === 'Main' ? '#e5e5e5' : 'transparent',
          },
          headerTransparent: false,
          headerLeft: () => (
            <TouchableOpacity>
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
            headerTitleStyle: styles.headerTitleMain,
          }}
        />
        <Stack.Screen
          name="Card"
          component={CardScreen}
          options={{
            title: 'Running',
            headerTitleStyle: styles.headerTitleCard,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitleMain: {
    fontSize: 21,
    fontFamily: 'OpenSans-Bold',
    color: '#313B5D',
  },
  headerTitleCard: {
    fontSize: 21,
    fontFamily: 'OpenSans-Bold',
    color: '#313B5D',
  },
});
