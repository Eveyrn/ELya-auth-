import { doc, setDoc,getDoc } from "firebase/firestore";
import { IProfile } from "../../types";
import { db } from "../../firebase";
import { axiosApi } from "../../axiosApi";

export const setUser = async (userId: string, userData: Omit<IProfile, "id" | "userId">) => {
    try {
      const userDoc = doc(db, "users", userId);
      await setDoc(userDoc, {
        ...userData,
        createdAt: new Date(),
        userId: userId,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      return null;
    }
  };
  
  export const getUserById = async (userId: string): Promise<IProfile | null> => {
    try {
      const userDoc = doc(db, "users", userId);
      const userSnapshot = await getDoc(userDoc);
  
      if (userSnapshot.exists()) {
        return {
          id: userSnapshot.id,
          ...userSnapshot.data(),
        } as IProfile;
      }
  
      return null;
    } catch (error) {
      console.error("Error getting user:", error);
      return null;
    }
  };
  
  export const setProfileData = async (profileData: IProfile) => {
    try {
      // Отправляем данные профиля на сервер (Firebase Realtime Database)
      const response = await axiosApi.put(`/profiles/${profileData.userId}.json`, profileData);
      return response.data;  // Возвращаем обновленный профиль
    } catch (error) {
      console.error('Error saving profile data:', error);
      throw new Error('Error saving profile data');
    }
  };