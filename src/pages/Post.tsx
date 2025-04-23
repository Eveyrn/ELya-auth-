import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { getPostById } from '../api/post' 
import { useAuthStore } from '../store/useAuthStore'; 

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const { profile } = useAuthStore(); 
 

  if (profile?.role !== 'user') {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const fetchedPost = await getPostById(id); 
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
