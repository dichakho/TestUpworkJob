/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  FlatList,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Header from './src/components/Header';
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
    return (
      <View
        style={{
          marginHorizontal: 16,
          marginBottom: 24,
          backgroundColor: 'white',
          borderRadius: 16,
          shadowColor: '#E5E5E5',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}>
        <View>
          <ImageBackground
            imageStyle={{borderTopLeftRadius: 16, borderTopRightRadius: 16}}
            style={{
              height: 150,
              // width: '100%',
              paddingHorizontal: 16,
              paddingTop: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            source={{uri: item.thumbnail}}>
            <View>
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  backgroundColor: '#ED2553',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4,
                }}>
                <Text style={{fontSize: 12, color: '#FFFFFF'}}>10% OFF</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                width: 40,
                height: 40,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={
                  item.liked
                    ? require('./src/assets/images/heart-fill.png')
                    : require('./src/assets/images/heart.png')
                }
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={{padding: 16}}>
          <Text style={{fontSize: 17, fontWeight: '500'}}>{item.name}</Text>
          <View
            style={{
              marginTop: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 14, height: 14, marginRight: 6}}
              source={require('./src/assets/images/map-marker-alt.png')}
            />
            <Text style={{color: '#9B9B9B'}}>{item.location}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  backgroundColor: '#F1708D',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4,
                  marginRight: 8,
                }}>
                <Text style={{fontSize: 17, fontWeight: '500', color: 'white'}}>
                  {item.rating}
                </Text>
              </View>
              <Text>({item.numOfRating})</Text>
            </View>

            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: '#9B9B9B'}}>${item.price}</Text>
              <Text style={{color: '#ED2553', fontSize: 22, fontWeight: '700'}}>
                ${item.salePrice}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
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
