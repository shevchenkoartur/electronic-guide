'use client';
import React, {useEffect, useState} from 'react';
import BasicSelect from '@/app/components/BasicSelect';
import {useRouter} from 'next/navigation';
import {Box, Button, Stack} from '@mui/material';
import {level as _level, tasks as _tasks} from '@/tasks';

const TaskBlock = () => {
  const [level, setLevel] = useState(_level[3]);
  const [tasks] = useState(_tasks.filter(task => task.level === level));
  const [currentTask, setCurrentTask] = useState(tasks.find((task) => task.level === level));
  const { push } = useRouter();

  useEffect(() => {
    setCurrentTask(_tasks.find((task) => task.level === level));
  }, [level]);

  const nextTask = () => {
    const index = _tasks.findIndex(task => task.id === currentTask.id);
    if (index !== -1) {
      setCurrentTask(_tasks[index + 1]);
    }
  };

  return (
    <Box mt={5} sx={{
      width: '50%',
      backgroundColor: '#6d9eed',
      borderRadius: '10px'
    }}
    >
      <BasicSelect level={level} setLevel={setLevel}/>
      {currentTask && (
        <>
          <div>{currentTask.name}</div>
          <div>{currentTask.description}</div>
        </>
      )}
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={nextTask}>Пропустити</Button>
        <Button variant="contained" onClick={() => push('/task/123')}>Тренуватись</Button>
      </Stack>
    </Box>
  );
};

export default TaskBlock;
