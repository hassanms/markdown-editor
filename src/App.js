import React from 'react';
import MarkdownEditor from './MarkdownEditor';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Simple Markdown Editor
      </Typography>
      <MarkdownEditor />
    </Container>
  );
}

export default App;
