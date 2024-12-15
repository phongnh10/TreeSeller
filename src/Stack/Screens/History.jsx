import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const History = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <Image source={require('../../../media/icon_back_left.png')} />
        <Text style={{fontSize: 20, fontWeight: '800'}}>Lịch sử giao dịch</Text>
        <View></View>
      </View>
      <Item
        time={'Thứ tư, 03/09/2021'}
        statusOrder={0}
        name={'Spider Plant'}
        attribute={'Ưa bóng'}
        quantity={2}
        image={require('../../../media/image_tree.png')}
      />
      <Item
        time={'Thứ năm, 03/10/2022'}
        statusOrder={1}
        name={'Spider Plant'}
        attribute={'Ưa bóng'}
        quantity={2}
        image={require('../../../media/img_dog.jpg')}
      />
      <Item
        time={'Thứ tư, 03/09/2021'}
        statusOrder={'Đặt hàng thành công'}
        name={'Spider Plant'}
        attribute={'Ưa bóng'}
        quantity={2}
        image={require('../../../media/img_dog.jpg')}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});

const Item = ({time, statusOrder, name, attribute, quantity, image}) => {
  return (
    <View style={{margin: 20, flexDirection: 'column'}}>
      <Text style={{fontSize: 16}}> {time}</Text>
      <View style={{height: 1, backgroundColor: 'gray'}} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <Image
          style={{width: 100, height: 100, borderRadius: 10}}
          source={image}
        />
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            paddingLeft: 20,
            justifyContent: 'center',
          }}>
          {statusOrder == 1 ? (
            <Text
              style={{
                color: '#007537',
                fontSize: 16,
                fontWeight: '700',
              }}>
              Đặt hàng thành công
            </Text>
          ) : (
            <Text
              style={{
                color: 'red',
                fontSize: 16,
                fontWeight: '700',
              }}>
              Đã huỷ đơn hàng
            </Text>
          )}

          <Text style={{fontWeight: '700'}}>
            {name} |<Text style={{fontWeight: '300'}}> {attribute}</Text>
          </Text>
          <Text style={{}}>{quantity} sản phẩm</Text>
        </View>
      </View>
    </View>
  );
};
