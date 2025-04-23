// import { create } from "zustand";
// import { IProfile, IUser } from "../types.ts";

// interface UserState {
//   user: IUser | null;
//   profile: IProfile | null;
//   setUser: (user: IUser) => void;
//   setProfile: (profile: IProfile) => void;
//   clearUser: () => void;
// }

// export const useAuthStore = create<UserState>((set) => ({
//   user: getInitialData(),
//   profile: getInitialProfile(),
//   setUser: (user) => {
//     localStorage.setItem("user", JSON.stringify(user));
//     set({ user });
//   },
//   setProfile: (profile) => {
//     localStorage.setItem("profile", JSON.stringify(profile));
//     set({ profile });
//   },
//   clearUser: () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("profile");
//     set({ user: null, profile: null });
//   },
// }));


// const getInitialData = (): IUser | null => {
//   const savedState = localStorage.getItem('user');
//   return savedState ? JSON.parse(savedState) : null;
// };

// const getInitialProfile = (): IProfile | null => {
//   const savedState = localStorage.getItem('profile');
//   return savedState ? JSON.parse(savedState) : null;
// };



// import { create } from "zustand";
// import { IProfile, IUser } from "../types.ts";

// const getInitialData = (): IUser | null => {
//   const savedState = localStorage.getItem('user');
//   return savedState ? JSON.parse(savedState) : null;
// };

// const getInitialProfile = (): IProfile | null => {
//   const savedState = localStorage.getItem('profile');
//   return savedState ? JSON.parse(savedState) : null;
// };

// interface UserState {
//   user: IUser | null;
//   profile: IProfile | null;
//   setUser: (user: IUser) => void;
//   setProfile: (profile: IProfile) => void;
//   clearUser: () => void;
// }

// export const useAuthStore = create<UserState>((set) => ({
//   user: getInitialData(),
//   profile: getInitialProfile(),
//   setUser: (user) => {
//     localStorage.setItem("user", JSON.stringify(user));
//     set({ user });
//   },
//   setProfile: (profile) => {
//     localStorage.setItem("profile", JSON.stringify(profile));
//     set({ profile });
//   },
//   clearUser: () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("profile");
//     set({ user: null, profile: null });
//   },
// }));



// import { create } from 'zustand';
// import { IProfile, IUser } from '../types.ts';
// import { axiosApi } from '../axiosApi';  // Подключаем axiosApi для взаимодействия с сервером

// // Получаем данные из локального хранилища
// const getInitialData = (): IUser | null => {
//   const savedState = localStorage.getItem('user');
//   return savedState ? JSON.parse(savedState) : null;
// };

// const getInitialProfile = (): IProfile | null => {
//   const savedState = localStorage.getItem('profile');
//   return savedState ? JSON.parse(savedState) : null;
// };

// interface UserState {
//   user: IUser | null;
//   profile: IProfile | null;
//   setUser: (user: IUser) => void;
//   setProfile: (profile: IProfile) => void;
//   setProfileData: (profileData: IProfile) => void;  // Добавим setProfileData для обновления профиля
//   clearUser: () => void;
// }

// export const useAuthStore = create<UserState>((set) => ({
//   user: getInitialData(),
//   profile: getInitialProfile(),
  
//   // Функция для установки пользователя
//   setUser: (user) => {
//     localStorage.setItem('user', JSON.stringify(user));
//     set({ user });
//   },
  
//   // Функция для установки профиля
//   setProfile: (profile) => {
//     localStorage.setItem('profile', JSON.stringify(profile));
//     set({ profile });
//   },
  
//   // Функция для обновления профиля
//   setProfileData: async (profileData: IProfile) => {
//     try {
//       const userId = profileData.id;
//       await axiosApi.put(`/profiles/${userId}.json`, profileData);  // Отправляем профиль на сервер через axios
//       set({ profile: profileData });  // Обновляем профиль в состоянии
//       localStorage.setItem('profile', JSON.stringify(profileData));  // Обновляем локальное хранилище
//     } catch (error) {
//       console.error('Error saving profile data:', error);
//       throw new Error('Error saving profile data');
//     }
//   },

//   // Функция для очистки данных пользователя
//   clearUser: () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('profile');
//     set({ user: null, profile: null });
//   },
// }));











// src/store/useAuthStore.ts
// import { create } from 'zustand';
// import { IProfile, IUser } from '../types';
// import { axiosApi } from '../axiosApi';

// const getInitialData = (): IUser | null => {
//   const savedState = localStorage.getItem('user');
//   return savedState ? JSON.parse(savedState) : null;
// };

// const getInitialProfile = (): IProfile | null => {
//   const savedState = localStorage.getItem('profile');
//   return savedState ? JSON.parse(savedState) : null;
// };

// interface UserState {
//   user: IUser | null;
//   profile: IProfile | null;
//   setUser: (user: IUser) => void;
//   setProfile: (profile: IProfile) => void;
//   setProfileData: (profileData: IProfile) => void;
//   clearUser: () => void;
// }

// export const useAuthStore = create<UserState>((set) => ({
//   user: getInitialData(),
//   profile: getInitialProfile(),
//   setUser: (user) => {
//     localStorage.setItem('user', JSON.stringify(user));
//     set({ user });
//   },
//   setProfile: (profile) => {
//     localStorage.setItem('profile', JSON.stringify(profile));
//     set({ profile });
//   },
//   setProfileData: async (profileData) => {
//     try {
//       const userId = profileData.userId;
//       await axiosApi.put(`/profiles/${userId}.json`, profileData);
//       set({ profile: profileData });
//       localStorage.setItem('profile', JSON.stringify(profileData));
//     } catch (error) {
//       console.error('Error saving profile data:', error);
//       throw new Error('Error saving profile data');
//     }
//   },
//   clearUser: () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('profile');
//     set({ user: null, profile: null });
//   },
// }));



// import { create } from 'zustand';
// import { IProfile, IUser } from '../types';
// import { axiosApi } from '../axiosApi';

// const getInitialData = (): IUser | null => {
//   const savedState = localStorage.getItem('user');
//   return savedState ? JSON.parse(savedState) : null;
// };

// const getInitialProfile = (): IProfile | null => {
//   const savedState = localStorage.getItem('profile');
//   return savedState ? JSON.parse(savedState) : null;
// };

// interface UserState {
//   user: IUser | null;
//   profile: IProfile | null;
//   setUser: (user: IUser) => void;
//   setProfile: (profile: IProfile) => void;
//   setProfileData: (profileData: IProfile) => void;
//   clearUser: () => void;
// }

// export const useAuthStore = create<UserState>((set) => ({
//   user: getInitialData(),
//   profile: getInitialProfile(),
//   setUser: (user) => {
//     localStorage.setItem('user', JSON.stringify(user));
//     set({ user });
//   },
//   setProfile: (profile) => {
//     localStorage.setItem('profile', JSON.stringify(profile));
//     set({ profile });
//   },
//   setProfileData: async (profileData) => {
//     try {
//       const userId = profileData.userId;
//       await axiosApi.put(`/profiles/${userId}.json`, profileData);
//       set({ profile: profileData });
//       localStorage.setItem('profile', JSON.stringify(profileData));
//     } catch (error) {
//       console.error('Error saving profile data:', error);
//       throw new Error('Error saving profile data');
//     }
//   },
//   clearUser: () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('profile');
//     set({ user: null, profile: null });
//   },
// }));



import { create } from 'zustand';
import { IProfile, IUser } from '../types';
import { axiosApi } from '../axiosApi';

const getInitialData = (): IUser | null => {
  const savedState = localStorage.getItem('user');
  return savedState ? JSON.parse(savedState) : null;
};

const getInitialProfile = (): IProfile | null => {
  const savedState = localStorage.getItem('profile');
  return savedState ? JSON.parse(savedState) : null;
};

interface UserState {
  user: IUser | null;
  profile: IProfile | null;
  setUser: (user: IUser) => void;
  setProfile: (profile: IProfile) => void;
  setProfileData: (profileData: IProfile) => void;
  clearUser: () => void;
}

export const useAuthStore = create<UserState>((set) => ({
  user: getInitialData(),
  profile: getInitialProfile(),
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },
  setProfile: (profile) => {
    localStorage.setItem('profile', JSON.stringify(profile));
    set({ profile });
  },
  setProfileData: async (profileData) => {
    try {
      const userId = profileData.userId;  // ID пользователя
      await axiosApi.put(`/profiles/${userId}.json`, profileData);  // Отправляем данные профиля в Firebase
      set({ profile: profileData });
      localStorage.setItem('profile', JSON.stringify(profileData));
    } catch (error) {
      console.error('Error saving profile data:', error);
      throw new Error('Error saving profile data');
    }
  },
  clearUser: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    set({ user: null, profile: null });
  },
}));
