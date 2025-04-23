// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { TextField, Button, Container, Box, Typography } from '@mui/material';
// import { axiosApi } from '../axiosApi';

// export const EditPost = () => {
//   const { id } = useParams();  // Получаем ID из URL
//   const [content, setContent] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await axiosApi.get(`/posts/${id}.json`);
//         setContent(response.data.content);  // Заполняем контент для редактирования
//       } catch (error) {
//         setError('Error fetching post');
//       }
//     };

//     fetchPost();
//   }, [id]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axiosApi.put(`/posts/${id}.json`, { content });
//       navigate(`/post/${id}`);  // Перенаправление на страницу поста после сохранения изменений
//     } catch (error) {
//       setError('Error updating post');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h4" align="center">Edit Post</Typography>
//         {error && <Typography color="error">{error}</Typography>}
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             multiline
//             rows={4}
//             label="Edit Post"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//             margin="normal"
//           />
//           <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
//             Save Changes
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

import { useParams } from 'react-router-dom';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { axiosApi } from '../axiosApi'; // Импорт для API запросов
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

export const EditPost = () => {
  const { id } = useParams();  // Получаем ID поста из URL
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();  // Используем useNavigate для перенаправления

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosApi.get(`/posts/${id}.json`); // Получаем пост по ID
        setContent(response.data.content);  // Заполняем контент для редактирования
      } catch (error) {
        setError('Error fetching post');
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosApi.put(`/posts/${id}.json`, { content });  // Обновляем пост в базе данных
      navigate(`/post/${id}`);  // Перенаправляем на страницу поста после сохранения изменений
    } catch (error) {
      setError('Error updating post');
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Edit Post</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Edit Post"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit">
          Save Changes
        </Button>
      </form>
    </Box>
  );
};
