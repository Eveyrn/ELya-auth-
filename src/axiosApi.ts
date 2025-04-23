import { auth } from './firebase';
import axios from 'axios';

const BASE_URL = 'https://elya-auth-default-rtdb.europe-west1.firebasedatabase.app/';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
});

axiosApi.interceptors.request.use(async (config) => {
  if (config.url?.startsWith('/') && auth.currentUser) {
    try {
      const token = await auth.currentUser.getIdToken(true); 
      config.params = { ...config.params, auth: token };
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw error;
    }
  }
  return config;
});

export const setProfileData = async (profileData: { id: string, name: string, lastName: string, role: string }) => {
  try {
    const userId = profileData.id;  
    await axiosApi.put(`/profiles/${userId}.json`, profileData);  
    return true; 
  } catch (error) {
    console.error("Error saving profile data:", error);
    throw new Error("Error saving profile data");
  }
};
