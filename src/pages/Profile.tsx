import { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { useAuthStore } from '../store/useAuthStore';
import { setProfileData } from '../api/users';

export const Profile = () => {
  const { profile } = useAuthStore();  
  const [firstName, setFirstName] = useState(profile?.name || ''); 
  const [lastName, setLastName] = useState(profile?.lastName || '');  
  const [role, setRole] = useState(profile?.role || 'user');  
  const [error, setError] = useState<string | null>(null);  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  
    if (!profile) return;  

    setError(null);  

    try {
      await setProfileData({
        id: profile.id, 
        userId: profile.userId, 
        name: firstName,  
        lastName: lastName,  
        role: role,  
        email: profile.email,  
      });
    } catch (error) {
      setError('Error saving profile'); 
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
            onChange={(e) => setFirstName(e.target.value)} 
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}  
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
