import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/screens/main';
import {CardScreen} from './src/screens/card';

export const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Main'}
          screenOptions={{
            headerStyle: {backgroundColor: '#e5e5e5'},
            headerTransparent: false,
            headerSearchBarOptions: {
              textColor: '#8a8a9d',
              barTintColor: 'white',
              hideNavigationBar: false,
              placeholder: 'Search...',
            },
          }}>
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
            options={{title: 'Running', headerTitleStyle: styles.headerTitle}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  safeArea: {
    backgroundColor: '#e5e5e5',
  },
  headerTitle: {
    fontSize: 21,
    fontFamily: 'OpenSans-Bold',
    color: '#313B5D',
    backgroundColor: 'red',
  },
});
