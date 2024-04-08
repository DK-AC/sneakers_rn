import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/screens/main';
import {CardScreen} from './src/screens/card';
import {RootStackParamList} from './src/types/navigation.types.ts';

export const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Main'}
          screenOptions={({route}) => ({
            headerStyle: {
              backgroundColor: route.name === 'Main' ? '#e5e5e5' : 'white',
            },
            headerTransparent: false,
            headerSearchBarOptions:
              route.name === 'Main'
                ? {
                    textColor: '#8a8a9d',
                    barTintColor: 'white',
                    hideNavigationBar: false,
                    placeholder: 'Search...',
                  }
                : undefined,
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  safeArea: {
    backgroundColor: '#e5e5e5',
  },
  headerTitleMain: {
    fontSize: 21,
    fontFamily: 'OpenSans-Bold',
    color: '#313B5D',
    backgroundColor: 'red',
  },
  headerTitleCard: {
    fontSize: 21,
    fontFamily: 'OpenSans-Bold',
    color: '#313B5D',
    backgroundColor: 'red',
  },
});
