'use client';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Description from '@/app/task/components/Description';
import Solution from '@/app/task/components/Solution';
import Tests from '@/app/task/components/Tests';
import {Button, Stack, Container as _Container, Grid, Box} from '@mui/material';
import {useRouter} from 'next/navigation';
import {Task} from '@/tasks';

type Props = {
  task: Task;
};

const Container = (props: Props) => {
  const { task } = props;
  const { push } = useRouter();
  return (
    <_Container>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <ArrowBackIcon onClick={() => push('/practice')}/>
          <Grid item xs={5}>
            <Description task={task} />
          </Grid>
          <Grid item xs={5}>
            <Solution />
            <Tests />
          </Grid>
          <Grid item xs={5}>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Тестувати</Button>
              <Button variant="contained">Перевірити</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </_Container>
  );
};

export default Container;
