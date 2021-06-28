/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';

class Header extends PureComponent {
  render() {
    return (
      <View
        style={{
          height: 55,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity style={{flex: 1}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../assets/images/BackIcon.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 8,
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            borderRadius: 4,
            padding: 8,
          }}>
          <Image
            style={{width: 16, height: 16, marginRight: 10}}
            source={require('../assets/images/search.png')}
          />
          <TextInput placeholder="Search tours..." />
        </View>
      </View>
    );
  }
}

export default Header;
