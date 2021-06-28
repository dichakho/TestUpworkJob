/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

class ItemTourScreen extends PureComponent {
  render() {
    const {item} = this.props;
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
                    ? require('../assets/images/heart-fill.png')
                    : require('../assets/images/heart.png')
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
              source={require('../assets/images/map-marker-alt.png')}
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
  }
}

export default ItemTourScreen;
