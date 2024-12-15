import Toast from 'react-native-toast-message';

const formatCurrency = number => {
  return new Intl.NumberFormat('vi-VN').format(number);
};

const showToast = message => {
  Toast.show({
    type: 'success',
    position: 'bottom',
    text1: message,
    visibilityTime: 3000,
    autoHide: true,
    bottomOffset: 40,
  });
};

export {formatCurrency, showToast};
