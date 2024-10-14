import * as React from 'react';
import Container from '@/app/task/components/Container';
import { tasks } from '@/tasks';

export const metadata = {
  title: 'Task - Electronic Guide',
};

export default function Task({ params }: { params: { id: string[] } }) {
  const task = tasks.find((task) => task.id === params.id[0]);
  return <Container task={task!} />;
}
