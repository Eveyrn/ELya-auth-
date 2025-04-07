// import { useState } from 'react';
// import { TextField, Button, Container, Box } from '@mui/material';
// import { axiosApi } from '../axiosApi';

// export const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [birthDate, setBirthDate] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Параметры для отправки в базу данных
//     const profileData = {
//       firstName,
//       lastName,
//       birthDate,
//     };

//     try {
//       const userId = 'USER_ID';  // Используйте ID авторизованного пользователя
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





import { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { axiosApi } from '../axiosApi';

export const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const profileData = {
      firstName,
      lastName,
      birthDate,
    };

    try {
      const userId = 'USER_ID';  // Используйте ID авторизованного пользователя
      await axiosApi.put(`/profiles/${userId}.json`, profileData);
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Birth Date"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" type="submit">
            Save Profile
          </Button>
        </form>
      </Box>
    </Container>
  );
};
