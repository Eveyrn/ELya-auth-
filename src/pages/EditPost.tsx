import { useParams } from 'react-router-dom';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { axiosApi } from '../axiosApi'; 
import { useNavigate } from 'react-router-dom';
export const EditPost = () => {
  const { id } = useParams(); 
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosApi.get(`/posts/${id}.json`); 
        setContent(response.data.content); 
      } catch (error) {
        setError('Error fetching post');
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosApi.put(`/posts/${id}.json`, { content });  
      navigate(`/post/${id}`);  
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
