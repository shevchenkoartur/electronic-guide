'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const { push } = useRouter();
  const pathname = usePathname();
  const isBorderBottom = (path: string) => pathname === path ? '1.5px solid #fff' : 'none';
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            onClick={() => push('/')}
            sx={{ cursor: 'pointer', borderBottom: isBorderBottom('/home') }}
          >
            Посібник
          </Typography>
          <Typography
            variant="h6"
            onClick={() => push('/practice')}
            ml={3}
            sx={{ cursor: 'pointer', borderBottom: isBorderBottom('/practice') }}
          >
            Практика
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
