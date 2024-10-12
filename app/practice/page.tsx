import * as React from 'react';
import { Box } from '@mui/material';
import Container from '@/app/practice/components/Container';

export const metadata = {
  title: 'Practice - Electronic Guide',
};

export default function Practice() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Container />
    </Box>
  );
}
