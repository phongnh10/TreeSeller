import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {productsResponse} from '../Redux/slices/productsSlice';
import {formatCurrency} from '../Stack/Item/formatCurrency';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [list, setList] = useState([]);
  const {products, status, error} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsResponse());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'succeeded') {
      setList(products.data);
      console.log('Gọi danh sách thành công');
    }
    if (status === 'loading') {
    } else if (status === 'failed') {
      console.log(`Lỗi sever: ${error}`);
    }
  }, [products, status, error]);

  return (
    <ScrollView style={{flex: 1}}>
      <Header navigation={navigation} />
      <Tree navigation={navigation} list={list} />
      <PottedPlant navigation={navigation} list={list} />
    </ScrollView>
  );
};

export default Home;

const Header = ({navigation}) => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <Image
      style={{width: '100%', marginTop: height / 10}}
      source={require('../../media/backround_home.png')}
    />
    <View
      style={{
        marginHorizontal: 38,
        marginTop: 20,
        position: 'absolute',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 37,
          }}>
          Planta - toả sáng {'\n'}không gian nhà bạn
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Order');
          }}>
          <Image source={require('../../media/icon_shopping_cart.png')} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', top: 7}}>
        <Text style={{color: '#007537', fontSize: 14, fontWeight: 'bold'}}>
          Xem hàng mới về
        </Text>
        <Image source={require('../../media/fi_arrow_right.png')} />
      </View>
    </View>
  </View>
);

const Tree = ({navigation, list}) => (
  <View>
    <Text
      style={{
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 38,
      }}>
      Cây trồng
    </Text>

    {list.length > 0 ? (
      <View style={{paddingHorizontal: 16, alignItems: 'center', top: 20}}>
        <FlatList
          data={list != null ? list.slice(0, 4) : list}
          keyExtractor={item => item._id.toString()}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({item}) => (
            <ItemProduct navigation={navigation} item={item} />
          )}
        />
      </View>
    ) : (
      <Loanding />
    )}

    <View
      style={{
        alignItems: 'flex-end',
        margin: 20,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            bottom: 5,
          }}>
          Xem thêm Cây trồng
        </Text>
      </TouchableOpacity>
      <View style={{height: 1, backgroundColor: 'black', width: 130}}></View>
    </View>
  </View>
);

const PottedPlant = ({list, navigation}) => (
  <View style={{flexDirection: 'column'}}>
    <Text
      style={{
        fontSize: 20,
        fontWeight: '500',
        top: 20,
        left: 38,
      }}>
      Chậu Cây trồng
    </Text>
    {list.length > 0 ? (
      <View style={{paddingHorizontal: 16, alignItems: 'center', top: 20}}>
        <FlatList
          data={list != null ? list.slice(6, 9) : list}
          keyExtractor={item => item._id.toString()}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({item}) => (
            <ItemProduct navigation={navigation} item={item} />
          )}
        />
      </View>
    ) : (
      <Loanding />
    )}
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Planta');
      }}
      style={{
        alignItems: 'flex-end',
        margin: 20,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          bottom: 5,
        }}>
        Xem thêm Chậu Cây trồng
      </Text>
      <View style={{height: 1, backgroundColor: 'black', width: 165}}></View>
    </TouchableOpacity>
  </View>
);

const ItemProduct = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', {item})}
      style={{
        width: 155,
        height: 217,
        flexDirection: 'column',
        margin: 10,
      }}>
      <Image
        style={{
          width: 155,
          height: 134,
          backgroundColor: 'gray',
          borderRadius: 10,
        }}
        source={{uri: item.image[1]}}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 10,
        }}>
        {item.name}
      </Text>
      <Text
        numberOfLines={1}
        style={{fontSize: 14, fontWeight: '500', color: 'gray'}}>
        {item.category.length > 1
          ? item.category[1].name
          : item.category[0].name}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#007537',
        }}>
        {formatCurrency(item.price)} vnd
      </Text>
    </TouchableOpacity>
  );
};

const Loanding = () => (
  <View
    style={{
      alignItems: 'center',
      margin: 20,
    }}>
    <Text
      style={{
        fontSize: 14,
        fontWeight: '500',
      }}>
      Loanding...
    </Text>
  </View>
);
