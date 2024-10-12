'use client';

import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Description from '@/app/task/[...id]/components/Description';
import Solution from '@/app/task/[...id]/components/Solution';
import Tests from '@/app/task/[...id]/components/Tests';
import {Button, Stack} from '@mui/material';
import {useRouter} from 'next/navigation';

const Container = () => {
  const { push } = useRouter();
  return (
    <div>
      <ArrowBackIcon onClick={() => push('/practice')}/>
      <Description />
      <Solution />
      <Tests />

      <Stack spacing={2} direction="row">
        <Button variant="contained">Тестувати</Button>
        <Button variant="contained">Перевірити</Button>
      </Stack>
    </div>
  );
};

export default Container;
