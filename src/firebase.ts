// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// // Конфигурация Firebase
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// // Инициализация Firebase
// const app = initializeApp(firebaseConfig);

// // Получаем экземпляр авторизации
// export const auth = getAuth(app); // Экспортируем auth

// // Функция для входа пользователя
// export async function emailSignIn(email: string, password: string) {
//   return await signInWithEmailAndPassword(auth, email, password);
// }

// // Функция для регистрации нового пользователя
// export async function emailSignUp(email: string, password: string) {
//   return await createUserWithEmailAndPassword(auth, email, password);
// }

// // Функция для выхода пользователя
// export async function userSignOut() {
//   return await signOut(auth);
// }



import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  
export const db = getFirestore(app)  

export async function emailSignIn(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}


export async function emailSignUp(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}


export async function userSignOut() {
  return await signOut(auth);
}
