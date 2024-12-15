import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Payment = ({route, navigation}) => {
  const {totalPrice} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../../../media/icon_back_left.png')} />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '800'}}>Thanh Toán</Text>
        <Text></Text>
      </View>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 18, fontWeight: '800'}}>
          Thông tin khách hàng
        </Text>
        <View style={{height: 2, backgroundColor: 'gray'}}></View>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            marginTop: 10,
          }}
          placeholder="Nguyen Hong PHong"
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            marginTop: 10,
          }}
          placeholder="nguyenhongphong@gmail.com"
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            marginTop: 10,
          }}
          placeholder="Địa Chỉ"
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            marginTop: 10,
          }}
          placeholder="Số điện thoại"
        />
        <Text style={{fontSize: 18, fontWeight: '800', marginTop: 20}}>
          Phương thức vận chuyển
        </Text>
        <View style={{height: 2, backgroundColor: 'gray'}} />
        {/* Phương thức vận chuyển */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: '400', color: '#007537'}}>
              Giao hàng Nhanh - 15.000đ
            </Text>
            <Text style={{fontSize: 16, fontWeight: '400'}}>
              Dự kiến giao hàng 5-7/9
            </Text>
          </View>
          <Image source={require('../../../media/fi_arrow_right.png')} />
        </View>
        <View style={{height: 2, backgroundColor: 'gray'}} />
        {/* Giao hàng COD */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: '400', color: '#007537'}}>
              Giao hàng COD - 20.000đ
            </Text>
            <Text style={{fontSize: 16, fontWeight: '400'}}>
              Dự kiến giao hàng 4-8/9
            </Text>
          </View>
        </View>
        <View style={{height: 2, backgroundColor: 'gray'}} />
        {/* Hình thức thanh toán */}
        <Text style={{fontSize: 18, fontWeight: '800', marginTop: 20}}>
          Hình thức thanh toán
        </Text>
        <View style={{height: 2, backgroundColor: 'gray'}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: '400', color: '#007537'}}>
              Thẻ VISA/MASTERCARD
            </Text>
          </View>
          <Image source={require('../../../media/fi_arrow_right.png')} />
        </View>
        <View style={{height: 2, backgroundColor: 'gray'}} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800',
            color: 'black',
            marginTop: 10,
          }}>
          Thẻ ATM
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16, fontWeight: '600'}}> Tạm tính</Text>
        <Text style={{fontSize: 16, fontWeight: '900'}}>{totalPrice}đ</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16, fontWeight: '600'}}> Phí vận chuyển</Text>
        <Text style={{fontSize: 16, fontWeight: '900'}}> 30000đ</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 16, fontWeight: '600'}}> Tổng cộng</Text>
        <Text style={{fontSize: 16, fontWeight: '900', color: '#007537'}}>
          {totalPrice + 30000}đ
        </Text>
      </View>
      <View style={styles.continueButton}>
        <Text style={{color: 'white', textAlign: 'center'}}> Tiếp tục</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    borderRadius: 10,
    backgroundColor: 'gray',
    padding: 11,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Payment;
