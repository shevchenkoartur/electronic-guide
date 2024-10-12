'use client';
import React from 'react';
import TaskBlock from '@/app/practice/components/TaskBlock';
import History from '@/app/practice/components/History';
import { Box, Divider } from '@mui/material';

const Container = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <TaskBlock />
      <Divider />
      <History />
    </Box>
  );
};

export default Container;
