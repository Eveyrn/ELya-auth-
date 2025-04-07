// import axios from 'axios';
// import { auth } from './firebase';  // Импортируем auth из firebase.ts

// const BASE_URL = 'https://elya-auth-default-rtdb.europe-west1.firebasedatabase.app/';

// export const axiosApi = axios.create({
//   baseURL: BASE_URL,
// });

// axiosApi.interceptors.request.use(async (config) => {
//   if (config.url?.startsWith('/') && auth.currentUser) {
//     try {
      
//       const token = await auth.currentUser.getIdToken();
      
  
//       config.params = { ...config.params, auth: token };
//     } catch (error) {
//       console.error('Token refresh failed:', error);
//       throw error;  
//     }
//   }
//   return config;
// });


// import axios from 'axios';

// const BASE_URL = 'https://elya-auth-default-rtdb.europe-west1.firebasedatabase.app/';

// export const axiosApi = axios.create({
//   baseURL: BASE_URL,
// });

// axiosApi.interceptors.request.use(async (config) => {
//   if (config.url?.startsWith('/') && auth.currentUser) {
//     try {
//       const token = await auth.currentUser.getIdToken();
//       config.params = { ...config.params, auth: token };
//     } catch (error) {
//       console.error('Token refresh failed:', error);
//       throw error;
//     }
//   }
//   return config;
// });













// import { auth } from './firebase';
// import axios from 'axios';

// const BASE_URL = 'https://elya-auth-default-rtdb.europe-west1.firebasedatabase.app/';

// export const axiosApi = axios.create({
//   baseURL: BASE_URL,
// });

// axiosApi.interceptors.request.use(async (config) => {
//   if (config.url?.startsWith('/') && auth.currentUser) {
//     try {
//       // Получаем ID токен пользователя
//       const token = await auth.currentUser.getIdToken(true);  // Передаем `true`, чтобы всегда получать свежий токен

//       // Добавляем токен в параметры запроса
//       config.params = { ...config.params, auth: token };
//     } catch (error) {
//       console.error('Token refresh failed:', error);
//       throw error;
//     }
//   }
//   return config;
// });


import { auth } from './firebase';
import axios from 'axios';

const BASE_URL = 'https://elya-auth-default-rtdb.europe-west1.firebasedatabase.app/';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
});

axiosApi.interceptors.request.use(async (config) => {
  if (config.url?.startsWith('/') && auth.currentUser) {
    try {
      const token = await auth.currentUser.getIdToken(true);  // true заставляет Firebase всегда обновлять токен
      config.params = { ...config.params, auth: token };
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw error;
    }
  }
  return config;
});
