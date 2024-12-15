import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesRequest} from '../../Redux/slices/categoriesSlice';
import {productsCategoryRequest} from '../../Redux/slices/productsByCategorySlice';
import {formatCurrency} from './formatCurrency';

const Planta = ({navigation}) => {
  const [select, setSelect] = useState('');
  const {categories, status, error} = useSelector(state => state.categories);
  const {productsByCate, statusProducts, errorProduct} = useSelector(
    state => state.productsByCategory,
  );
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesRequest());
  }, []);

  useEffect(() => {
    if (status === 'succeeded' && categories) {
      setSelect(categories.data[4]?._id || '');
      console.log('Gọi danh sách categories thành công');
    } else if (status === 'failed') {
      console.error(`Lỗi khi gọi Categories API: ${error}`);
    }
  }, [categories, status, error]);

  useEffect(() => {
    if (select) {
      dispatch(productsCategoryRequest(select));
    }
  }, [dispatch, select]);

  useEffect(() => {
    if (statusProducts === 'succeeded') {
      setList(productsByCate.data);
      console.log('Gọi danh sách Products by categories thành công ');
    } else if (statusProducts === 'failed') {
      console.error(`Lỗi khi gọi Products API: ${errorProduct}`);
    }
  }, [productsByCate, statusProducts, errorProduct]);

  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <Header navigation={navigation} />
      <View style={{margin: 20, flexDirection: 'column'}}>
        {categories.data?.length > 0 ? (
          <CategoryList
            categories={categories}
            select={select}
            setSelect={setSelect}
          />
        ) : (
          <Loading />
        )}

        {list.length > 0 ? (
          <ProductList list={list} navigation={navigation} />
        ) : (
          <Loading />
        )}
      </View>
    </View>
  );
};

export default Planta;

const Header = ({navigation}) => (
  <View
    style={{
      flexDirection: 'row',
      margin: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <TouchableOpacity onPress={() => navigation.navigate('TabNavigation')}>
      <Image source={require('../../../media/icon_back_left.png')} />
    </TouchableOpacity>
    <Text style={{fontSize: 16, fontWeight: '500'}}>CHẬU CÂY TRỒNG</Text>
    <Image source={require('../../../media/icon_shopping_cart.png')} />
  </View>
);

const CategoryList = ({categories, select, setSelect}) => {
  const clickCategory = id => {
    setSelect(id);
  };

  return (
    <FlatList
      horizontal
      data={categories?.data?.slice(4) || []}
      keyExtractor={item => item._id?.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => clickCategory(item._id)}
          style={
            select === item._id
              ? {
                  margin: 6,
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: '#007537',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              : {padding: 12}
          }>
          <Text
            style={
              select === item._id
                ? {fontSize: 14, color: 'white', fontWeight: 'bold'}
                : {color: 'black', fontSize: 14, fontWeight: '400'}
            }>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const ProductItem = ({item, navigation}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('ProductDetail', {item});
    }}
    style={{
      flex: 1,
      justifyContent: 'space-between',
      margin: 10,
    }}>
    <Image
      style={{width: 150, height: 150, borderRadius: 10}}
      source={{uri: item.image[0]}}
    />
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
    <Text numberOfLines={3} style={{width: 150}}>
      {item.category[0].name}
    </Text>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
      {formatCurrency(item.price)} vnd
    </Text>
  </TouchableOpacity>
);

const ProductList = ({list, navigation}) => (
  <FlatList
    style={{marginTop: 20}}
    data={list}
    keyExtractor={item => item._id.toString()}
    numColumns={2}
    renderItem={({item}) => <ProductItem item={item} navigation={navigation} />}
  />
);

const Loading = () => (
  <View style={{justifyContent: 'center'}}>
    <Text style={{fontSize: 16, alignItems: 'center', textAlign: 'center'}}>
      Loading...
    </Text>
  </View>
);
