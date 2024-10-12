'use client';
import React from 'react';
import BasicSelect from '@/app/components/BasicSelect';
import {useRouter} from 'next/navigation';
import {Box, Button, Stack, Typography} from '@mui/material';
import {level as _level} from '@/app/tasks';

const TaskBlock = (props) => {
  const { tasks } = props;
  const [level, setLevel] = React.useState(_level.easy);

  console.log(tasks, 'tasks in TaskBlock');
  const { push } = useRouter();
  return (
    <Box mt={5} sx={{
      width: '50%',
      backgroundColor: '#6d9eed',
      borderRadius: '10px'
    }}
    >
      <BasicSelect level={level} />
      <Typography>
        задача
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, nesciunt.
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Пропустити</Button>
        <Button variant="contained" onClick={() => push('/task/123')}>Тренуватись</Button>
      </Stack>
    </Box>
  );
};

export default TaskBlock;
