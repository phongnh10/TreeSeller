// import axios from 'axios';

// const AxiosInstance = (token = '', contentType = 'application/json') => {
//   const axiosInstance = axios.create({
//     // baseURL: 'http://192.168.1.5:3000', // Địa chỉ server
//     baseURL: 'http://172.20.10.2:3000', // Địa chỉ server
//   });

//   axiosInstance.interceptors.request.use(
//     async config => {
//       config.headers = {
//         Authorization: `Bearer ${token}`,
//         Accept: 'application/json',
//         'Content-Type': contentType,
//       };
//       return config;
//     },
//     err => Promise.reject(err),
//   );

//   axiosInstance.interceptors.response.use(
//     res => res.data,
//     err => Promise.reject(err),
//   );

//   return axiosInstance;
// };

// export default AxiosInstance;
