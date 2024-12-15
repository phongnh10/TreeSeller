import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from '../../AppContext/AppContext';
import {formatCurrency} from '../Item/formatCurrency';

const {width, height} = Dimensions.get('window');

const ProductDetail = ({route, navigation}) => {
  const {userSave, setUserSave} = useContext(AppContext);
  const {order, setOrder} = useContext(AppContext);
  const {item} = route.params;
  const [i, setI] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.price);
  const [status, setStatus] = useState(false);

  const clickPush = () => {
    if (i < 2) {
      setI(i + 1);
      return;
    }
    if (i == 2) {
      setI(0);
      return;
    }
  };
  const clickMinus = () => {
    if (i > 0) {
      setI(i - 1);
      return;
    }
    if (i == 0) {
      setI(2);
      return;
    }
  };

  const clickMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      return;
    }
  };

  const clickPushQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
      return;
    }
  };

  useEffect(() => {
    setPrice(quantity * item.price);
  }, [quantity]);

  const message = () => {
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, 1000);
  };
  const addOrder = () => {
    const checkProduct = order.filter(
      itemOrder => itemOrder.product._id === item._id,
    );

    if (checkProduct.length > 0) {
      setOrder(prevOrders =>
        prevOrders.map(itemOrder => {
          if (itemOrder.product._id === item._id) {
            return {
              ...itemOrder,
              quantity: itemOrder.quantity + quantity,
              totalPrice:
                (itemOrder.quantity + quantity) * itemOrder.product.price,
            };
          }
          return itemOrder;
        }),
      );
    } else {
      setOrder(prevOrders => [
        ...prevOrders,
        {
          idUser: userSave._id,
          idOrder: `${userSave._id}-${item._id}-${Date.now()}`,
          product: item,
          quantity: quantity,
          totalPrice: price,
        },
      ]);
    }
  };

  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../../media/icon_back_left.png')}></Image>
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: '500'}}>{item.name} </Text>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigation.navigate('Order')}>
          <Image
            source={require('../../../media/icon_shopping_cart.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => clickMinus()}
          style={{position: 'absolute', start: 0, margin: 20, zIndex: 10}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../../media/back.png')}></Image>
        </TouchableOpacity>
        <View style={{backgroundColor: '#F6F6F6', alignItems: 'center'}}>
          <Image
            style={{
              width: width,
              height: (height / 10) * 3,
              borderRadius: 0,
            }}
            source={{uri: item.image[i]}}></Image>
        </View>
        <TouchableOpacity
          onPress={() => clickPush()}
          style={{position: 'absolute', end: 0, margin: 10}}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../../../media/back-right.png')}></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 40,
          marginRight: 40,
          marginTop: 20,
          flexDirection: 'column',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#007537',
              borderRadius: 5,
              marginRight: 10,
            }}>
            <Text style={{fontSize: 14, color: 'white'}}>
              {item.category[0].name}
            </Text>
          </View>
          {item.category[0]._id == '6757244a18f96cbf4eae7a62' ? (
            <View> </View>
          ) : (
            <View
              style={{
                padding: 10,
                backgroundColor: '#007537',
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 14, color: 'white'}}>
                {item.category[1].name}
              </Text>
            </View>
          )}
        </View>
        <Text
          style={{
            fontSize: 24,
            color: '#007537',
            fontWeight: '600',
            marginTop: 10,
          }}>
          {formatCurrency(item.price)} vnd
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#3A3A3A',
            fontWeight: '600',
            marginTop: 10,
          }}>
          Chi tiết sản phẩm
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: '#3A3A3A',
            marginTop: 5,
          }}
        />
        <ViewProduct
          tilet1={'Kích cở'}
          tilet2={item.size}
          colorTilet2={'#3A3A3A'}
          colorView={''}
        />
        <ViewProduct
          tilet1={'Xuất xứ'}
          tilet2={item.origin}
          colorTilet2={'#3A3A3A'}
          colorView={'gray'}
        />
        <ViewProduct
          tilet1={'Tình trạng'}
          tilet2={item.status + ' sp'}
          colorTilet2={'#007537'}
          colorView={'gray'}
        />
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          flexDirection: 'column',
          marginTop: 20,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{}}>Đã chọn {quantity} sản phẩm</Text>
          <Text style={{}}>Tạm tính</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => clickMinusQuantity()}>
                <Image source={require('../../image/icon_minus.png')}></Image>
              </TouchableOpacity>
              <Text style={{fontSize: 20, paddingLeft: 20, paddingRight: 20}}>
                {quantity}
              </Text>
              <TouchableOpacity onPress={() => clickPushQuantity()}>
                <Image source={require('../../image/icon_plus.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            {formatCurrency(price)} vnd
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            addOrder();
            message();
            // navigation.navigate('Order');
          }}
          style={{
            padding: 15,
            backgroundColor: 'gray',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
      {status ? <Message tilet={'Thêm sản phẩm thành công'} /> : null}
    </View>
  );
};

export default ProductDetail;

const ViewProduct = ({tilet1, tilet2, colorTilet2, colorView}) => (
  <View>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text
        style={{
          fontSize: 16,
          color: '#3A3A3A',
          fontWeight: '400',
          marginTop: 10,
        }}>
        {tilet1}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: colorTilet2,
          fontWeight: '400',
          marginTop: 10,
        }}>
        {tilet2}
      </Text>
    </View>
    <View
      style={{
        height: 1,
        backgroundColor: colorView,
        marginTop: 5,
      }}
    />
  </View>
);
const Message = ({tilet}) => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          textAlign: 'center',
          padding: 15,
          backgroundColor: 'green',
          color: 'white',
          marginTop: 100,
        }}>
        {tilet}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
