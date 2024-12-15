import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {registerRequest} from '../../Redux/slices/registerSlice';

const Register = ({navigation}) => {
  const [name, setName] = useState('Phong Nguyen');
  const [phone, setPhone] = useState('0836662137');
  const [email, setEmail] = useState('phong@gmail.com');
  const [password, setPassword] = useState('123123');
  const [messager, setMessager] = useState('');
  const {user, status, error} = useSelector(state => state.register);
  const dispatch = useDispatch();

  const ClickRegister = async () => {
    setMessager('');
    if (!email || !password || !phone || !name) {
      setMessager('Vui lòng không bỏ trống các ô nhập');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessager('Vui lòng nhập đúng định dạng email');
      return;
    }
    if (!/^0\d{9}$/.test(phone)) {
      setMessager('Số điện thoại phải bắt đầu bằng 0 và có 10 số');
      return;
    }
    dispatch(registerRequest({name, email, password, phone}));
  };

  useEffect(() => {
    if (status === 'succeeded') {
      setMessager('Đăng ký thành công');
      navigation.navigate('Login');
    }
    if (status === 'loading') {
      setMessager('Loangding...');
    } else if (status === 'failed') {
      setMessager(`Lỗi đăng ký: ${error}`);
    }
  }, [status, user, error]);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../../media/backround_login.png')}
          style={{width: '100%', top: -100}}></Image>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            top: -120,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Đăng ký
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
            }}>
            Tạo tài khoản
          </Text>

          <View
            style={{
              width: 300,
              height: 46,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#8B8B8B',
              marginBottom: 10,
              justifyContent: 'center',
              paddingHorizontal: 10,
              marginTop: 30,
            }}>
            <TextInput
              placeholder="Họ tên"
              value={name}
              onChangeText={setName}></TextInput>
          </View>

          <View
            style={{
              width: 300,
              height: 46,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#8B8B8B',
              marginBottom: 10,
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}></TextInput>
          </View>
          <View
            style={{
              width: 300,
              height: 46,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#8B8B8B',
              marginBottom: 5,
              paddingLeft: 10,
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="Số điện thoại"
              value={phone}
              onChangeText={setPhone}
              keyboardType="numric"></TextInput>
          </View>
          <View
            style={{
              width: 300,
              height: 46,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#8B8B8B',
              marginBottom: 5,
              paddingLeft: 10,
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="Mật khẩu"
              value={password}
              onChangeText={setPassword}></TextInput>
          </View>

          <Text
            style={{
              color: '#CE0000',
              width: 300,
              fontSize: 11,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            {messager}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 12,
                textAlign: 'center',
              }}>
              Để đăng ký tài khoản, bạn đồng ý
              <Text
                style={{color: '#009245', fontSize: 12, fontWeight: 'bold'}}>
                {' '}
                Terms & {'\n'}Condition{' '}
              </Text>
              <Text>and </Text>
              <Text
                style={{color: '#009245', fontSize: 12, fontWeight: 'bold'}}>
                Pricacy Policy
              </Text>
            </Text>
          </View>

          <TouchableOpacity onPress={() => ClickRegister()}>
            <LinearGradient
              colors={['#007537', '#4CAF50']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 15,
                width: 300,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Đăng Ký
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 21,
            }}>
            <View
              style={{
                width: 120,
                height: 1.5,
                backgroundColor: '#4CAF50',
              }}></View>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                marginHorizontal: 10,
                fontWeight: 'bold',
              }}>
              Hoặc
            </Text>
            <View
              style={{
                width: 120,
                height: 1.5,
                backgroundColor: '#4CAF50',
              }}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 300,
              paddingHorizontal: 100,
              marginTop: 35,
            }}>
            {/* <Image source={require('../../../media/icon_facebook.png')} />
            <Image source={require('../../../media/icon_facebook.png')} /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 29,
            }}>
            <Text style={{marginRight: 10, fontSize: 12, fontWeight: 'bold'}}>
              Tôi đã có tài khoản
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#009245',
                }}>
                Đăng Nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
