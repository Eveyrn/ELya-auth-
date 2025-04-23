// import { useEffect, useState } from 'react';
// import { Box, List, ListItem, Typography, Select, MenuItem } from '@mui/material';
// import { useAuthStore } from '../store/useAuthStore';
// import { IPost } from '../types';
// import { getPosts } from '../api/post';

// export const Posts = () => {
//   const [posts, setPosts] = useState<IPost[]>([]);
//   const [selectedUserId, setSelectedUserId] = useState<string>('');
//   const { user } = useAuthStore();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const postData = await getPosts ();
//         setPosts (postData);
//       }catch (error) {
//         console.error ('Error fetching posts:', error);
//         setPosts ([]);
//       }
//     };

//     fetchPosts();
//   }, [selectedUserId, user]);

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Select
//         value={selectedUserId}
//         onChange={(e) => setSelectedUserId(e.target.value as string)}
//         displayEmpty
//       >
//         <MenuItem value="">All Posts</MenuItem>
//         <MenuItem value={user?.id || ''}>My Posts</MenuItem>
//       </Select>

//       <List>
//         {posts.map((post) => (
//           <ListItem key={post.id}>
//             <Typography>
//               {post.content} - {new Date(post.createdAt).toLocaleDateString()}
//               <br />
//               Author: {post.email}
//             </Typography>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };






// import { useEffect, useState } from 'react';
// import { useParams, Navigate } from 'react-router-dom';
// import { useAuthStore } from '../store/useAuthStore';
// import { Box, Typography, Button, CircularProgress } from '@mui/material';
// import { axiosApi } from '../axiosApi';
// import { useNavigate } from 'react-router-dom';

// interface Post {
//   content: string;
//   email: string;
//   createdAt: string;
// }

// export const Post = () => {
//   const { id } = useParams();  // Получаем ID поста из URL
//   const { profile } = useAuthStore();  // Получаем профиль пользователя из Zustand
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   // Проверка роли пользователя
//   if (profile?.role !== 'user') {
//     return <Navigate to="/" />;  // Перенаправление на главную страницу, если роль не user
//   }

//   // Функция для получения поста
//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await axiosApi.get(`/posts/${id}.json`);
//         setPost(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching post');
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   const handleDelete = async () => {
//     try {
//       await axiosApi.delete(`/posts/${id}.json`);
//       navigate('/');  // Перенаправление на главную страницу после удаления
//     } catch (error) {
//       setError('Error deleting post');
//     }
//   };

//   const handleEdit = () => {
//     navigate(`/edit-post/${id}`);  // Перенаправляем на страницу редактирования
//   };

//   if (loading) {
//     return <CircularProgress />;  // Показать индикатор загрузки
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;  // Показать ошибку
//   }

//   return (
//     <Box sx={{ mt: 4 }}>
//       {post ? (
//         <>
//           <Typography variant="h5" gutterBottom>
//             Post by: {post.email}
//           </Typography>
//           <Typography variant="body1">{post.content}</Typography>
//           <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
//             Created at: {new Date(post.createdAt).toLocaleString()}
//           </Typography>

//           <Box sx={{ mt: 2 }}>
//             <Button onClick={handleEdit} variant="contained" color="primary" sx={{ mr: 2 }}>
//               Edit Post
//             </Button>
//             <Button onClick={handleDelete} variant="contained" color="secondary">
//               Delete Post
//             </Button>
//           </Box>
//         </>
//       ) : (
//         <Typography variant="body1">Post not found</Typography>
//       )}
//     </Box>
//   );
// };


// import { useParams } from 'react-router-dom';
// import { Box, Typography } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { getPostById } from '../api/users';

// export const Post = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState<any>(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       if (id) {
//         const fetchedPost = await getPostById(id);
//         setPost(fetchedPost);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (!post) {
//     return (
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6" align="center">Post not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Typography variant="h4">{post.content}</Typography>
//       <Typography variant="body2" color="textSecondary">
//         Author: {post.email} | {new Date(post.createdAt).toLocaleDateString()}
//       </Typography>
//     </Box>
//   );
// };



// import { useParams } from 'react-router-dom';
// import { Box, Typography } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { getPostById } from '../api/users';

// export const Post = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState<any>(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       if (id) {
//         const fetchedPost = await getPostById(id);
//         setPost(fetchedPost);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (!post) {
//     return (
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6" align="center">Post not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Typography variant="h4">{post.content}</Typography>
//       <Typography variant="body2" color="textSecondary">
//         Author: {post.email} | {new Date(post.createdAt).toLocaleDateString()}
//       </Typography>
//     </Box>
//   );
// };



import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { getPostById } from '../api/post' 
import { useAuthStore } from '../store/useAuthStore'; // Импорт Zustand хранилища

export const Post = () => {
  const { id } = useParams(); // Получаем ID поста из URL
  const [post, setPost] = useState<any>(null);
  const { profile } = useAuthStore(); // Получаем профиль пользователя

  // Проверка на роль пользователя. Только "user" может просматривать посты
  if (profile?.role !== 'user') {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const fetchedPost = await getPostById(id); // Получаем пост по ID
        setPost(fetchedPost);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" align="center">Post not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">{post.content}</Typography>
      <Typography variant="body2" color="textSecondary">
        Author: {post.email} | {new Date(post.createdAt).toLocaleDateString()}
      </Typography>
    </Box>
  );
};
