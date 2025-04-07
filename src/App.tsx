// import { ReactNode } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { useAuthStore } from './store/useAuthStore.ts';
// import { Login } from './components/Login.tsx';  
// import { Register } from './components/Register.tsx';  
// import { Container, CssBaseline } from '@mui/material';
// import { Posts } from './pages/posts.tsx'; 
// import { CreatePost } from './pages/createPost.tsx';  
// import Header from './components/header.tsx'; 

// const PrivateRoute = ({ element }: { element: ReactNode }) => {
//   const { user } = useAuthStore();
//   return user ? element : <Navigate to="/login" />;
// };

// const PublicRoute = ({ element }: { element: ReactNode }) => {
//   const { user } = useAuthStore();
//   return !user ? element : <Navigate to="/" />;
// };

// export const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <Header /> 
//       <Container>
//         <Routes>
//           <Route path="/" element={<PrivateRoute element={<Posts />} />} />
//           <Route path="/add-post" element={<PrivateRoute element={<CreatePost />} />} />
//           <Route path="/login" element={<PublicRoute element={<Login />} />} />
//           <Route path="/register" element={<PublicRoute element={<Register />} />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Container>
//     </>
//   );
// };

// export default App;

// import { ReactNode } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { useAuthStore } from './store/useAuthStore.ts';
// import { Login } from './components/Login.tsx';  
// import { Register } from './components/Register.tsx';  
// import { Container, CssBaseline } from '@mui/material';
// import { Posts } from './pages/posts.tsx'; 
// import { CreatePost } from './pages/createPost.tsx';  
// import Header from './components/header.tsx'; 
// import { Profile } from './components/Profile.tsx';

// const PrivateRoute = ({ element }: { element: ReactNode }) => {
//   const { user } = useAuthStore();
//   return user ? element : <Navigate to="/login" />;
// };

// const PublicRoute = ({ element }: { element: ReactNode }) => {
//   const { user } = useAuthStore();
//   return !user ? element : <Navigate to="/" />;
// };

// export const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <Header />
//       <Container sx={{ mt: 5 }}>
//         <Routes>
//           <Route path="/" element={<PrivateRoute element={<Posts />} />} />
//           <Route path="/add-post" element={<PrivateRoute element={<CreatePost />} />} />
//           <Route path="/login" element={<PublicRoute element={<Login />} />} />
//           <Route path="/register" element={<PublicRoute element={<Register />} />} />
//           <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Container>
//     </>
//   );
// };

// export default App;
















// import { ReactNode } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { useAuthStore } from './store/useAuthStore';
// import { Login } from './components/Login';
// import { Register } from './components/Register';
// import { Container, CssBaseline } from '@mui/material';
// import { Posts } from './pages/posts';
// import { CreatePost } from './pages/createPost';
// import Header from './components/header';
// import { Profile } from './components/Profile';

// const PrivateRoute = ({ element }: { element: ReactNode }) => {
//   const { user } = useAuthStore();
//   return user ? element : <Navigate to="/login" />;
// };

// const PublicRoute = ({ element }: { element: ReactNode }) => {
//   const { user } = useAuthStore();
//   return !user ? element : <Navigate to="/" />;
// };

// export const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <Header />
//       <Container sx={{ mt: 5 }}>
//         <Routes>
//           <Route path="/" element={<PrivateRoute element={<Posts />} />} />
//           <Route path="/add-post" element={<PrivateRoute element={<CreatePost />} />} />
//           <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
//           <Route path="/login" element={<PublicRoute element={<Login />} />} />
//           <Route path="/register" element={<PublicRoute element={<Register />} />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Container>
//     </>
//   );
// };

// export default App;






import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Container, CssBaseline } from '@mui/material';
import { Posts } from './pages/posts';
import { CreatePost } from './pages/createPost';
import Header from './components/header';
import { Profile } from './components/Profile';

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
          <Route path="/" element={<PrivateRoute element={<Posts />} />} />
          <Route path="/add-post" element={<PrivateRoute element={<CreatePost />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/register" element={<PublicRoute element={<Register />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
