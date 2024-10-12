'use client';
import React from 'react';
import TaskBlock from '@/app/practice/components/TaskBlock';
import History from '@/app/practice/components/History';
import {Divider} from '@mui/material';
import {tasks as _tasks} from '@/tasks';

const Container = () => {
  const [tasks] = React.useState(_tasks);
  return (
    <div>
      <TaskBlock tasks={tasks} />
      <Divider />
      <History />
    </div>
  );
};

export default Container;
