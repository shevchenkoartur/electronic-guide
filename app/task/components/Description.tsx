import React from 'react';
import {Box} from '@mui/material';

const Description = (props) => {
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
