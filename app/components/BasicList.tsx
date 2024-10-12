import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function BasicList() {
  const { push } = useRouter();
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <Typography sx={{fontWeight: 'bold'}}>Вступ</Typography>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/1_1')}>
              <Link><ListItemText primary="1.1 Введення в JavaScript" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/1_2')}>
              <Link><ListItemText primary="1.2 Довідники та специфікації" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/1_3')}>
              <Link><ListItemText primary="1.3 Редактори коду" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/1_4')}>
              <Link><ListItemText primary="1.4 Консоль розробника" /></Link>
            </ListItemButton>
          </ListItem>

          <Typography sx={{fontWeight: 'bold'}}>Основи JavaScript</Typography>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_1')}>
              <Link><ListItemText primary="2.1 Привіт, мир!" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_2')}>
              <Link><ListItemText primary="2.2 Структура коду" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_3')}>
              <Link><ListItemText primary="2.3 Суворий режим - 'use strict'" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_4')}>
              <Link><ListItemText primary="2.4 Змінні" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_5')}>
              <Link><ListItemText primary="2.5 Типи даних" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_6')}>
              <Link><ListItemText primary="2.6 Взаємодія: alert, prompt, confirm" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_7')}>
              <Link><ListItemText primary="2.7 Перетворення типів" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_8')}>
              <Link><ListItemText primary="2.8 Базові оператори, математика" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_9')}>
              <Link><ListItemText primary="2.9 Оператори порівняння" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_10')}>
              <Link><ListItemText primary="2.10 Умовне розгалуження: if, '?'" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_11')}>
              <Link><ListItemText primary="2.11 Логічні оператори" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_12')}>
              <Link><ListItemText primary="2.12 Оператори нульового злиття та присвоєння: '??', '??='" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_13')}>
              <Link><ListItemText primary="2.13 Цикли while та for" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_14')}>
              <Link><ListItemText primary="2.14 Конструкція 'switch'" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_15')}>
              <Link><ListItemText primary="2.15 Функції" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_16')}>
              <Link><ListItemText primary="2.16 Function Expression" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_17')}>
              <Link><ListItemText primary="2.17 Стрілочні функції, основи" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => push('/theory/2_18')}>
              <Link><ListItemText primary="2.18 Особливості JavaScript" /></Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
