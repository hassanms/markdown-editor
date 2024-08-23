import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
      <TextField
        label="Write your markdown here..."
        multiline
        minRows={10}
        variant="outlined"
        value={markdown}
        onChange={handleChange}
        sx={{ mb: 3 }}
      />
      <Typography variant="h6">Preview:</Typography>
      <Box
        sx={{
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '16px',
          minHeight: '200px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Box>
    </Box>
  );
};

export default MarkdownEditor;
