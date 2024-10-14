import React from 'react';
import {Box} from '@mui/material';
import CodeEditor from "@/components/editorApp";
import {Task} from '@/tasks';

type Props = {
  task: Task;
};

const Solution = (props: Props) => {
  const { task } = props;
  return (
    <Box sx={{border: '1px solid green'}}>
      Solution
      <CodeEditor functionTemplate={task.functionTemplate} />
    </Box>
  );
};

export default Solution;
