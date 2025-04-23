// import { useState } from 'react';
// import { TextField, Button, Container, Box } from '@mui/material';
// import { axiosApi } from '../axiosApi';

// export const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [birthDate, setBirthDate] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const profileData = {
//       firstName,
//       lastName,
//       birthDate,
//     };

//     try {
//       const userId = 'USER_ID';  
//       await axiosApi.put(`/profiles/${userId}.json`, profileData);
//     } catch (error) {
//       console.error('Error creating profile:', error);
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ mt: 4 }}>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Birth Date"
//             type="date"
//             value={birthDate}
//             onChange={(e) => setBirthDate(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <Button variant="contained" type="submit">
//             Save Profile
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };



// import { useState } from 'react';
// import { TextField, Button, Container, Box, Typography } from '@mui/material';
// import { useAuthStore } from '../store/useAuthStore';
// import { setProfileData } from '../api/users';

// export const Profile = () => {
//   const { profile } = useAuthStore();
//   const [firstName, setFirstName] = useState(profile?.name || '');
//   const [lastName, setLastName] = useState(profile?.lastName || '');
//   const [role, setRole] = useState(profile?.role || 'user');
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!profile) return;
//     setError(null);

//     try {
//       await setProfileData({
//         id: profile.id,
//         userId: profile.userId,
//         name: firstName,
//         lastName: lastName,
//         role: role,
//         email: profile.email,
//       });
//     } catch (error) {
//       setError('Error saving profile');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h4" align="center">Profile</Typography>
//         {error && <Typography color="error">{error}</Typography>}
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             margin="normal"
//           />
//           <TextField
//             fullWidth
//             label="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//             margin="normal"
//           />
//           <TextField
//             fullWidth
//             label="Role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//             margin="normal"
//           />
//           <Button variant="contained" type="submit" sx={{ mt: 2 }}>Save Changes</Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };


// import { useState } from 'react';
// import { TextField, Button, Container, Box, Typography } from '@mui/material';
// import { axiosApi } from '../axiosApi';  // API для обновления профиля

// export const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [birthDate, setBirthDate] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const profileData = {
//       firstName,
//       lastName,
//       birthDate,
//     };

//     try {
//       const userId = 'USER_ID';  // Здесь нужно использовать актуальный ID пользователя
//       await axiosApi.put(`/profiles/${userId}.json`, profileData);  // Обновление данных
//     } catch (error) {
//       console.error('Error creating profile:', error);
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ mt: 4 }}>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Birth Date"
//             type="date"
//             value={birthDate}
//             onChange={(e) => setBirthDate(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <Button variant="contained" type="submit">
//             Save Profile
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };




// import { useState, useEffect } from 'react';
// import { Button, TextField, Container, Box, Typography } from '@mui/material';
// import { useAuthStore } from '../store/useAuthStore'; // Импорт хранилища состояния
// import { axiosApi } from '../axiosApi';

// export const Profile = () => {
//   const { user, profile } = useAuthStore(); // Получаем данные пользователя и его профиль
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [birthDate, setBirthDate] = useState('');
//   const [role, setRole] = useState(''); // Для отображения роли пользователя

//   // Загружаем профиль при первом рендере
//   useEffect(() => {
//     if (profile) {
//       setFirstName(profile.name || '');
//       setLastName(profile.lastName || '');
//       setRole(profile.role || '');
//     }
//   }, [profile]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const profileData = {
//       firstName,
//       lastName,
//       birthDate,
//       role,
//     };

//     try {
//       const userId = user?.id;  
//       if (userId) {
//         await axiosApi.put(`/profiles/${userId}.json`, profileData);  // Отправка обновленных данных на сервер
//       }
//     } catch (error) {
//       console.error('Error creating profile:', error);
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ mt: 4 }}>
//         <form onSubmit={handleSubmit}>
//           <Typography variant="h4">Profile</Typography>
          
//           <TextField
//             fullWidth
//             label="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Birth Date"
//             type="date"
//             value={birthDate}
//             onChange={(e) => setBirthDate(e.target.value)}
//             sx={{ mb: 2 }}
//           />
          
//           <Typography variant="h6">Role: {role}</Typography> {/* Добавляем отображение роли */}

//           <Button variant="contained" type="submit">
//             Save Profile
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };




import { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { useAuthStore } from '../store/useAuthStore';
import { setProfileData } from '../api/users';

export const Profile = () => {
  const { profile } = useAuthStore();  // Получаем профиль пользователя из Zustand
  const [firstName, setFirstName] = useState(profile?.name || '');  // Инициализируем поле с текущим значением
  const [lastName, setLastName] = useState(profile?.lastName || '');  // Инициализируем поле с текущим значением
  const [role, setRole] = useState(profile?.role || 'user');  // Инициализируем поле с текущим значением
  const [error, setError] = useState<string | null>(null);  // Состояние для ошибок

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Отменяем стандартное поведение формы
    if (!profile) return;  // Если профиль не существует, выходим

    setError(null);  // Сбрасываем ошибку перед отправкой данных

    try {
      await setProfileData({
        id: profile.id,  // ID из состояния
        userId: profile.userId,  // userId из состояния
        name: firstName,  // Получаем обновленное имя
        lastName: lastName,  // Получаем обновленную фамилию
        role: role,  // Получаем обновленную роль
        email: profile.email,  // Используем email из профиля
      });
    } catch (error) {
      setError('Error saving profile');  // Если возникла ошибка, показываем сообщение
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center">Profile</Typography>
        {error && <Typography color="error">{error}</Typography>}  
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}  // Обновляем имя
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}  // Обновляем фамилию
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}  // Обновляем роль
            required
            margin="normal"
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Save Changes
          </Button>
        </form>
      </Box>
    </Container>
  );
};
