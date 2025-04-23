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
