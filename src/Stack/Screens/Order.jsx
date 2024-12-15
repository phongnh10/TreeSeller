import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from '../../AppContext/AppContext';
import {formatCurrency} from '../Item/formatCurrency';

const Order = ({navigation}) => {
  const {order, setOrder} = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    const price = order.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0,
    );
    setTotalPrice(price);
  }, [order]);
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Header order={order} setOrder={setOrder} navigation={navigation} />
      <View>
        {order.length > 0 ? (
          <Cart order={order} setOrder={setOrder} />
        ) : (
          <Message />
        )}
      </View>
      {order.length > 0 ? <CompletePayment totalPrice={totalPrice} /> : null}
    </View>
  );
};

const Header = ({order, navigation, setOrder}) => (
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
      <Image source={require('../../../media/icon_back_left.png')} />
    </TouchableOpacity>
    <Text style={{fontSize: 18, fontWeight: '900'}}>Giỏ Hàng</Text>
    <View>
      <TouchableOpacity
        onPress={() => {
          setOrder([]);
        }}>
        <Image
          source={
            order.length > 0 ? require('../../../media/icon_trash.png') : null
          }
        />
      </TouchableOpacity>
    </View>
  </View>
);

const Message = () => (
  <View style={{marginTop: 40}}>
    <Text style={{color: 'black', textAlign: 'center'}}>
      Giỏ hàng của bạn hiện đang trống
    </Text>
  </View>
);

const CompletePayment = ({totalPrice, navigation}) => {
  return (
    <View style={{position: 'absolute', width: '100%', bottom: 0}}>
      <View style={{margin: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: '600'}}>Tạm tính</Text>
          <Text style={{fontSize: 15, fontWeight: '800'}}>
            {formatCurrency(totalPrice)} vnd
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Payment', {totalPrice});
          }}
          style={{
            height: 50,
            backgroundColor: '#007537',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            margin: 5,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>
            Tiến hành thanh toán
          </Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../../media/icon_chevron_right.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Cart = ({order, setOrder}) => {
  const delProduct = item => {
    const newOrder = order.filter(
      orderItem => orderItem.idOrder !== item.idOrder,
    );
    setOrder(newOrder);
  };

  const minusQuantity = item => {
    if (item.quantity > 1) {
      const newOrder = order.map(orderItem => {
        if (orderItem.idOrder === item.idOrder) {
          return {
            ...orderItem,
            quantity: orderItem.quantity - 1,
          };
        }
        return orderItem;
      });
      setOrder(newOrder);
    }
  };
  const pushQuantity = item => {
    if (item.quantity < 20) {
      const newOrder = order.map(orderItem => {
        if (orderItem.idOrder === item.idOrder) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        }
        return orderItem;
      });
      setOrder(newOrder);
    }
  };

  return (
    <View>
      <FlatList
        data={order}
        renderItem={({item}) => (
          <Item
            item={item}
            delProduct={() => delProduct(item)}
            pushQuantity={() => pushQuantity(item)}
            minusQuantity={() => minusQuantity(item)}
          />
        )}
        keyExtractor={item => item.idOrder.toString()}
      />
    </View>
  );
};

const Item = ({item, delProduct, pushQuantity, minusQuantity}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
      }}>
      <Image
        style={{width: 100, height: 100, borderRadius: 10}}
        source={{
          uri: item.product.image[0],
        }}
      />
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 15, fontWeight: '900'}}>
          {item.product.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '800',
            color: '#007537',
            marginTop: 5,
          }}>
          {formatCurrency(item.product.price)} vnd
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: 150,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: 80,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
              }}
              onPress={() => minusQuantity()}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  fontSize: 20,
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={{color: 'black', fontWeight: '900', fontSize: 16}}>
              {item.quantity}
            </Text>
            <TouchableOpacity
              style={{
                padding: 10,
              }}
              onPress={() => pushQuantity()}>
              <Text style={{color: 'black', fontWeight: '900', fontSize: 20}}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              delProduct();
            }}
            style={{
              padding: 10,
            }}>
            <Text style={{fontWeight: '700'}}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Order;
