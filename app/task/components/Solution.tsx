import React from 'react';
import {Box} from '@mui/material';
import CodeEditor from "@/components/editorApp";

const Solution = () => {
  return (
    <Box sx={{border: '1px solid green'}}>
      Solution
      <CodeEditor />
    </Box>
  );
};

export default Solution;
