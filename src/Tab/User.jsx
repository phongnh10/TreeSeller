import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';

const User = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{marginLeft: 40, marginRight: 40}}>
        <View style={{alignItems: 'center', marginTop: 40, marginBottom: 40}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> PROFILE</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 60, height: 60, borderRadius: 60}}
            source={require('../../media/img_dog.jpg')}></Image>
          <View style={{flexDirection: 'column', marginLeft: 20}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Nguyen Hong Phong
            </Text>
            <Text style={{fontSize: 14, fontWeight: '300'}}>
              nguyenhongphong@gmail.com
            </Text>
          </View>
        </View>
        <Text style={{fontSize: 16, marginBottom: 5, marginTop: 30}}>
          Chung
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'gray',
            fontWeight: '300',
          }}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UpdateProfile');
          }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 5,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Chỉnh sửa thông tin
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 5,
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          Cẩm nang trồng cây
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 5,
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          Lịch sử giao dịch
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Questions');
          }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 5,
              marginTop: 15,
              fontWeight: 'bold',
            }}>
            Q & A
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 16, marginBottom: 5, marginTop: 30}}>
          Bảo mật và điều khoản
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'gray',
            fontWeight: '300',
          }}></View>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 5,
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          Điều khoản và điều kiện
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 5,
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          Chính Sách quyền riêng tư
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 5,
              marginTop: 15,
              fontWeight: 'bold',
              color: 'red',
            }}>
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
