import { useState } from 'react';
import { Button, TextField, Container, Box, Typography, Alert } from '@mui/material';
import { emailSignIn } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { getUserById } from '../api/users';

export const Login = () => {
  const navigate = useNavigate();
  const { setUser, setProfile } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const { user } = await emailSignIn(email, password);

      if (user.uid) {
        const userFull = await getUserById(user.uid);
        if (userFull) {
          setProfile(userFull);
        }
      }

      setUser({
        email: user.email, uid: user.uid,
        id: ''
      });
      navigate('/');
    } catch (error) {
      setError(`Error: ${error}`);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center">Login</Typography>
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
            Login
          </Button>
          <Typography sx={{ mt: 2 }} align="center">
            Don't have an account? <Button onClick={() => navigate('/register')} color="primary">Register</Button>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};
