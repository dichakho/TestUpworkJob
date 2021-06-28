/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
// import Header from './src/components/Header';
// import ItemTour from '.'
import Header from '../components/Header';
import ItemTour from '../components/ItemTour';
const data = [
  {
    id: 1,
    name: 'Bahrain River Trip [Tzoor Exclusive]',
    location: 'Manama, Bahrain',
    rating: 4.5,
    price: '700',
    salePrice: '499',
    numOfRating: 501,
    badge: 10,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/d01d/8c5c/574f13791f6328b13e60470b60b2745e?Expires=1626048000&Signature=LuZi~c-Olvo1w1GodH92xmTPpryp4B6~NdgWNJVWuJp67Yvyafy07DzYph4rY80-u-q2Fif11Vgnd3~oPrLMUDaoxesqEO4hO-X5McqYx8jlytlojNvzM8XEqjNopdDstHFGpiHu3a5SfaJT8yMqaCxvHqrvPNvUiGFGhGd1UVI~4EDbiR066uPZMRHr0Kgi8R1ox3NHa6cPGeihMEieWAE9T6KwfH6Q6D5nhBs6iRqj0iwcJg~2UMWb1IhF7VgN4VTyY5x3hW90LXlSJ2WzCZnrgQ-ytnAhx82W10yR0UYTZdVyRIg5nBKYzXze7ZLpilEIVGsJHd1H0zcyxNofiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    liked: true,
  },
  {
    id: 2,
    name: 'Bahrain River Trip [Tzoor Exclusive]',
    location: 'Manama, Bahrain',
    rating: 4.5,
    price: '700',
    salePrice: '499',
    numOfRating: 501,
    badge: 10,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/d01d/8c5c/574f13791f6328b13e60470b60b2745e?Expires=1626048000&Signature=LuZi~c-Olvo1w1GodH92xmTPpryp4B6~NdgWNJVWuJp67Yvyafy07DzYph4rY80-u-q2Fif11Vgnd3~oPrLMUDaoxesqEO4hO-X5McqYx8jlytlojNvzM8XEqjNopdDstHFGpiHu3a5SfaJT8yMqaCxvHqrvPNvUiGFGhGd1UVI~4EDbiR066uPZMRHr0Kgi8R1ox3NHa6cPGeihMEieWAE9T6KwfH6Q6D5nhBs6iRqj0iwcJg~2UMWb1IhF7VgN4VTyY5x3hW90LXlSJ2WzCZnrgQ-ytnAhx82W10yR0UYTZdVyRIg5nBKYzXze7ZLpilEIVGsJHd1H0zcyxNofiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    liked: false,
  },
  {
    id: 3,
    name: 'Bahrain River Trip [Tzoor Exclusive]',
    location: 'Manama, Bahrain',
    rating: 4.5,
    price: '700',
    salePrice: '499',
    numOfRating: 501,
    badge: 10,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/d01d/8c5c/574f13791f6328b13e60470b60b2745e?Expires=1626048000&Signature=LuZi~c-Olvo1w1GodH92xmTPpryp4B6~NdgWNJVWuJp67Yvyafy07DzYph4rY80-u-q2Fif11Vgnd3~oPrLMUDaoxesqEO4hO-X5McqYx8jlytlojNvzM8XEqjNopdDstHFGpiHu3a5SfaJT8yMqaCxvHqrvPNvUiGFGhGd1UVI~4EDbiR066uPZMRHr0Kgi8R1ox3NHa6cPGeihMEieWAE9T6KwfH6Q6D5nhBs6iRqj0iwcJg~2UMWb1IhF7VgN4VTyY5x3hW90LXlSJ2WzCZnrgQ-ytnAhx82W10yR0UYTZdVyRIg5nBKYzXze7ZLpilEIVGsJHd1H0zcyxNofiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    liked: true,
  },
];
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const renderItem = ({item, index}) => {
    return <ItemTour item={item} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <View
        style={{
          flex: 1,
          // paddingHorizontal: 16,
          backgroundColor: '#F5F5F5',
          // backgroundColor: 'white',
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
