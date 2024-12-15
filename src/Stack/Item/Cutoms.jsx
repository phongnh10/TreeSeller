import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

export const Loading = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current; // Giá trị ban đầu của animation

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1, // Kết thúc tại giá trị 1
        duration: 1000, // Thời gian hoàn thành 1 vòng
        useNativeDriver: true, // Bật native driver để tăng hiệu suất
      }),
    );
    spin.start();

    return () => spin.stop(); // Cleanup khi component unmount
  }, [rotateAnim]);

  // Biến đổi giá trị animation thành góc quay
  const spinInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Quay từ 0 đến 360 độ
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.dot,
          {transform: [{rotate: spinInterpolate}]}, // Áp dụng xoay
        ]}
      />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 15, // Tạo hình tròn
    backgroundColor: 'blue', // Màu xanh cho chấm
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
