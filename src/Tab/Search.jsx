import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {productsResponse} from '../Redux/slices/productsSlice';
import {formatCurrency} from '../Stack/Item/formatCurrency';

const {width, height} = Dimensions.get('window');

const Search = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [list, setList] = useState([]);
  const {products, status, error} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsResponse());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'succeeded') {
      console.log('Gọi danh sách Search thành công');
    }
    if (status === 'loading') {
    } else if (status === 'failed') {
      console.log(`Lỗi sever: ${error}`);
    }
  }, [products, status, error]);

  //*searching
  const handleSearch = text => {
    if (products && text) {
      console.log(searchQuery);
      setList(
        products.data.filter(item => {
          return item.name.toLowerCase().includes(text.toLowerCase());
        }),
      );
    } else {
      setList([]);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Body list={list} navigation={navigation} />
    </View>
  );
};
export default Search;

const Header = ({handleSearch, searchQuery, setSearchQuery}) => (
  <View style={{flexDirection: 'column'}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
      }}>
      <Image source={require('../../media/icon_back_left.png')} />
      <Text style={{fontSize: 16, fontWeight: '500'}}>TÌM KIẾM</Text>
      <View />
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 10,
      }}>
      <TextInput
        onChangeText={text => {
          setSearchQuery(text);
          handleSearch(text);
        }}
        value={searchQuery}
        placeholder="Tìm kiếm"
        style={{
          height: 40,
          flex: 1,
        }}
      />
      <Image source={require('../../media/icon_search.png')} />
    </View>
  </View>
);

const Body = ({list, navigation}) => (
  <View>
    {list.length > 0 ? (
      <View style={{paddingHorizontal: 16, alignItems: 'center', top: 20}}>
        <FlatList
          data={list}
          keyExtractor={item => item._id.toString()}
          numColumns={2}
          renderItem={({item}) => (
            <ItemProduct navigation={navigation} item={item} />
          )}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginHorizontal: 10,
            gap: 20,
          }}
          contentContainerStyle={{
            paddingVertical: 20,
          }}
        />
      </View>
    ) : (
      <Loanding />
    )}
  </View>
);

const Loanding = () => (
  <View
    style={{
      alignItems: 'center',
    }}>
    <Text
      style={{
        fontSize: 14,
        fontWeight: '500',
      }}>
      Không có sản phẩm nào...
    </Text>
  </View>
);
const ItemProduct = ({item, navigation}) => {
  return (
    <View style={{marginTop: 10, marginBottom: 10}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetail', {item})}
        style={{
          flexDirection: 'column',
          width: width / 2 - 40,
        }}>
        <Image
          style={{
            width: width / 2 - 40,
            height: width / 2 - 20,
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
    </View>
  );
};
