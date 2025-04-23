import { useState } from 'react';
import { Button, TextField, Container, Box, Typography } from '@mui/material';
import { useAuthStore } from '../store/useAuthStore';
import { createPost } from '../api/post';

export const CreatePost = () => {
  const { profile } = useAuthStore(); 
  const [content, setContent] = useState('');  
  const [error, setError] = useState<string | null>(null);  

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);  

    if (!content) {
      setError('Post content cannot be empty');
      return;
    }

    try {
      await createPost({
        content, 
        userId: profile?.id || '', 
        email: profile?.email || '',  
        createdAt: new Date().toISOString(),
      });
      setContent('');  
    } catch (error) {
      setError('Error creating post');
    }
  };

  // if (profile?.role !== 'admin') {
  //   return (
  //     <Typography variant="h6" color="error">
  //       You are not authorized to create a post. Only admins can create posts.
  //     </Typography>
  //   );
  // }

  console.log(profile)

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Create Post</Typography>
        {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}  
            required
            sx={{ mb: 2 }} 
          />
          <Button variant="contained" type="submit">
            Create Post
          </Button>
        </form>
      </Box>
    </Container>
  );
};
