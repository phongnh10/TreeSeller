import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';

// Hook để lấy state
export const useAppSelector = useSelector;

// Hook để gọi dispatch
export const useAppDispatch = () => useDispatch();
