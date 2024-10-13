export type Task = {
  id: number;
  name: string;
  description: string;
  level: string;
};

export const level: { [key: number]: string } = {
  3: 'easy',
  2: 'medium',
  1: 'hard',
};

export const tasks: Task[] = [
  {
    id: 1,
    name: 'Порахуйте символи у вашому рядку',
    description: 'Основна ідея полягає в тому, щоб підрахувати всі символи, що зустрічаються в рядку. Якщо у вас є такий рядок, як aba, то результат має бути {\'a\': 2, \'b\': 1}.\n' +
      '\n' +
      'Що робити, якщо рядок порожній? Тоді результатом має бути порожній літерал об’єкта {}.',
    level: level[3],
  },
  {
    id: 2,
    name: 'izi 2',
    description: 'izi2',
    level: level[3],
  },
  {
    id: 3,
    name: 'izi 3',
    description: 'izi3',
    level: level[3],
  },
  {
    id: 4,
    name: 'med 1',
    description: 'med 1',
    level: level[3],
  },
  {
    id: 5,
    name: 'med 2',
    description: 'med 2',
    level: level[2],
  },
  {
    id: 6,
    name: 'med 3',
    description: 'med 3',
    level: level[2],
  },
  {
    id: 7,
    name: 'hard 1',
    description: 'hard 1',
    level: level[1],
  },
  {
    id: 8,
    name: 'hard 2',
    description: 'hard 2',
    level: level[1],
  },
  {
    id: 9,
    name: 'hard 3',
    description: 'hard 3',
    level: level[1],
  },
];
