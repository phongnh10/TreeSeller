import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../../../media/icon_back_left.png')}></Image>
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '800'}}>
          Chỉnh sửa thông tin
        </Text>
        <View></View>
      </View>
      <View
        style={{
          margin: 40,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 100, height: 100, borderRadius: 100}}
          source={require('../../../media/img_dog.jpg')}></Image>
        <Text style={{fontSize: 16, marginTop: 20, fontWeight: '600'}}>
          Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết
          để chỉnh sửa.
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            alignSelf: 'stretch',
            marginTop: 30,
          }}
          placeholder="Nguyen Hong Phong"
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            alignSelf: 'stretch',
            marginTop: 20,
          }}
          placeholder="NguyenHongPhong@gmail.com"
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            alignSelf: 'stretch',
            marginTop: 20,
          }}
          placeholder="Go Vap, Ho Chi Minh"
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            alignSelf: 'stretch',
            marginTop: 20,
          }}
          placeholder="0936887373"
        />
      </View>
      <View style={{flex: 1, margin: 20}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'gray',
            borderRadius: 10,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            LƯU THÔNG TIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateProfile;
