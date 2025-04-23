import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Container, CssBaseline } from '@mui/material';
import { Post } from './pages/Post';
import { CreatePost } from './pages/createPost';
import Header from './components/header';
import { Profile } from './pages/Profile';
import { CreateProfile } from './pages/CreateProfile';

const PrivateRoute = ({ element }: { element: ReactNode }) => {
  const { user } = useAuthStore();
  return user ? element : <Navigate to="/login" />;
};

const PublicRoute = ({ element }: { element: ReactNode }) => {
  const { user } = useAuthStore();
  return !user ? element : <Navigate to="/" />;
};

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/post/:id" element={<PrivateRoute element={<Post />} />} />
          <Route path="/add-post" element={<PrivateRoute element={<CreatePost />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/register" element={<PublicRoute element={<Register />} />} />
          <Route path="/create-profile" element={<PrivateRoute element={<CreateProfile />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
                                                                                                                                   