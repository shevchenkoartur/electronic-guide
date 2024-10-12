'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {level as _level, levelReverse} from '@/tasks';

type Props = {
  level: string;
  setLevel: (level: string) => void;
};

export default function BasicSelect(props: Props) {
  const { level, setLevel } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 300, backgroundColor: '#ffff' }}>
      <FormControl sx={{width: '50%'}}>
        <InputLabel id="demo-simple-select-label">Рівень</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={level}
          label="Level"
          onChange={handleChange}
        >
          <MenuItem value={levelReverse[_level.easy]}>Легкий</MenuItem>
          <MenuItem value={levelReverse[_level.medium]}>Середній</MenuItem>
          <MenuItem value={levelReverse[_level.hard]}>Важкий</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
