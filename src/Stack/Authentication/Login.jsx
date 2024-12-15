import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequest} from '../../Redux/slices/loginSlice';
import {AppContext} from '../../AppContext/AppContext';

const Login = ({navigation}) => {
  const {userSave, setUserSave} = useContext(AppContext);
  const [statusPassHide, setStatusPassHide] = useState(false);
  const [checkboxStatus, setcheckBoxStatus] = useState(false);
  const [email, setEmail] = useState('phong@gmail.com');
  const [password, setPassword] = useState('123123');
  const [messager, setMessager] = useState('');
  const {user, status, error} = useSelector(state => state.login);
  const dispatch = useDispatch();

  const ClickEye = () => {
    setStatusPassHide(!statusPassHide);
  };
  const ClickCheckBox = () => {
    setcheckBoxStatus(!checkboxStatus);
  };

  const ClickLogin = async () => {
    setMessager('');
    if (!email || !password) {
      setMessager('Vui lòng không bỏ trống tài khoản mật khẩu');
      return;
    }

    dispatch(loginRequest({email, password}));
  };

  useEffect(() => {
    if (status === 'succeeded') {
      setMessager('Đăng nhập thành công');
      setUserSave(user.User);
      console.log(userSave);

      navigation.navigate('TabNavigation');
    }
    if (status === 'loading') {
      setMessager('Loangding...');
    } else if (status === 'failed') {
      setMessager(`Lỗi đăng nhập: ${error}`);
    }
  }, [status, user, error]);

  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          source={require('../../../media/backround_login.png')}
          style={{width: '100%', top: 0}}></Image>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 32,
            backgroundColor: '#F8EEC0',
            position: 'absolute',
            marginLeft: 20,
            marginTop: 36,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../media/ep_arrow_right_bold.png')}></Image>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Chào mừng bạn
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
            }}>
            Đăng nhập tài khoản
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
              placeholder="Nhập email hoặc số điện thoại"
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
              paddingRight: 35,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Mật khẩu"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={statusPassHide}></TextInput>
            <TouchableOpacity
              onPress={() => ClickEye()}
              style={{position: 'absolute', end: 10}}>
              <Image
                source={
                  statusPassHide
                    ? require('../../../media/icon_eye_hide.png')
                    : require('../../../media/icon_eye_true.png')
                }></Image>
            </TouchableOpacity>
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
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 300,
            }}>
            <TouchableOpacity onPress={() => ClickCheckBox()}>
              <Image
                source={
                  checkboxStatus
                    ? require('../../../media/icon_checkbox_true.png')
                    : require('../../../media/icon_checkbox_false.png')
                }></Image>
            </TouchableOpacity>
            <View>
              <Text
                style={{color: '#007537', fontSize: 11, fontWeight: 'bold'}}>
                Quên mật khẩu ?
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => ClickLogin()}>
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
                Đăng Nhập
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
              marginTop: 20,
            }}>
            <Image source={require('../../../media/icon_google.png')}></Image>
            <Image source={require('../../../media/icon_facebook.png')}></Image>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{marginRight: 10, fontSize: 12, fontWeight: 'bold'}}>
              Bạn không có tài khoản
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#009245',
                }}>
                Tạo tài khoản
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
