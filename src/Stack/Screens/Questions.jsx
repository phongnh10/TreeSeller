import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Questions = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{margin: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={require('../../../media/icon_back_left.png')} />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: '800'}}>Q & A</Text>
          <View></View>
        </View>
        <View style={{margin: 20}}>
          <Item
            tilet={'Tôi trộn các chất dinh dưỡng theo thứ tự nào?'}
            text={
              ' A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.'
            }
            number={1}
          />
          <Item
            tilet={'Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?'}
            text={
              ' Dinh dưỡng cao cấp nên ko có hạn sử dụng, chỉ cần bảo quản tốt dưới nhiệt độ mát, tránh ánh sáng trực tiếp là sẽ để được rất lâu, Để duy trì mức dinh dưỡng tối ưu, chúng tôi khuyên bạn nên thay đổi hồ chứa thuỷ canh của bạn sau mỗi 7 ngày, còn với thổ canh thì pha lần nào tưới lần đó, thừa thì bỏ lần sau pha mới. Đặc biệt có vi sinh Mycorrhizae có hạn sử dụng sau 2 năm kể từ ngày mua.'
            }
            number={2}
          />
          <Item
            tilet={'Khi nào tôi thêm bộ điều chỉnh pH?'}
            text={
              'Sau khi bạn thêm A-F nhưng trước khi bạn thêm line E Root Igniter vào thì phải căn chỉnh pH trước rồi. PH tối ưu là giữa 5,8-6,3, nấm rễ phát triển tốt hơn khi pH chuẩn, dinh dưỡng đủ. Bạn cần thêm 1 số công cụ bút đo nữa nhé.'
            }
            number={3}
          />
          <Item
            tilet={
              'Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Planta không?'
            }
            text={
              'Không. Chúng tôi không sử dụng bất kỳ chất điều chỉnh tăng trưởng nào trong dòng Nutrient của mình. Điều này bao gồm Paclobutrazol và Daminozide, được chứng minh là có ảnh hưởng tiêu cực đến sức khỏe khi con người ăn phải, đặc biệt là Ung Thư.'
            }
            number={4}
          />
          <Item
            tilet={'Các sản phẩm Planta có phải là hữu cơ không?'}
            text={
              'Các sản phẩm dinh dưỡng của chúng tôi là sự pha trộn của tất cả các thành phần hữu cơ và vô cơ tự nhiên, không chứa hormone, nước hoa, thuốc nhuộm hoặc chất điều hòa tăng trưởng. Chúng đã được thiết kế đặc biệt để tối đa hóa khả dụng sinh học của các chất dinh dưỡng để hấp thụ và hiệu quả tối ưu. Chúng tôi hiểu được sự hấp thụ của một khu vườn hữu cơ. Quan trọng hơn, độ chính xác như vậy mang lại kết quả vượt trội với một giải pháp hoàn toàn hữu cơ. Chúng tôi tiếp tục phát triển các sản phẩm hữu cơ để thử nghiệm và sẽ cung cấp cho các thị trường dựa trên những kết quả chúng tôi thu thập được .'
            }
            number={5}
          />
        </View>
      </View>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});

const Item = ({tilet, text, number}) => {
  const [clickQuest, setClickQuest] = useState(0);

  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: '800',
            marginVertical: 10,
            flex: 1,
            paddingEnd: 10,
          }}>
          {tilet}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (clickQuest != number) {
              setClickQuest(number);
            } else {
              setClickQuest(0);
            }
          }}>
          <Image source={require('../../../media/icon_back_left.png')} />
        </TouchableOpacity>
      </View>
      {clickQuest == number ? (
        <Text style={{fontWeight: '400'}}>{text}</Text>
      ) : null}
    </View>
  );
};
