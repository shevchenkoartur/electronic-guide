import React from 'react';
import {Box} from '@mui/material';
import {Task} from '@/tasks';

type Props = {
  task: Task;
};

const Description = (props: Props) => {
  const { task } = props;
  return (
      <Box sx={{border: '1px solid red'}}>
        {task.name}
        {task.description}
        Description
      </Box>
  );
};

export default Description;
