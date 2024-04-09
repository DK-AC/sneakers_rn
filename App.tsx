import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/screens/main';
import {CardScreen} from './src/screens/card';
import {RootStackParamList} from './src/types/navigation.types.ts';
import Hamburger from './assets/icons/Hamburger.svg';
import Basket from './assets/icons/Basket.svg';
import {useSelector} from 'react-redux';
import {nbItemsInCart} from './src/store/selectors/cart';

export const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const selectNbItemsInCart = useSelector(nbItemsInCart);

  return (
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
              <View style={styles.cartContainer}>
                <Basket width={24} height={24} />
                {selectNbItemsInCart > 0 && (
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>{selectNbItemsInCart}</Text>
                  </View>
                )}
              </View>
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
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 21,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
    color: '#313B5D',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    position: 'absolute',
    top: -10,
    right: -15,
  },
  cartBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginLeft: 4,
    position: 'absolute',
    top: -10,
    right: -10,
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
  },
});
