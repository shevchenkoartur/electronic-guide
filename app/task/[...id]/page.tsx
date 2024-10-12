import * as React from 'react';
import {Box} from '@mui/material';
import Container from '@/app/task/[...id]/components/Container';

export const metadata = {
  title: 'Task - Electronic Guide',
};

export default function Task() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Container />
      Task
    </Box>
  );
}
