export type Task = {
  id: string;
  name: string;
  description: string;
  level: string;
  functionTemplate: string;
};

export const level: { [key: number]: string } = {
  3: 'easy',
  2: 'medium',
  1: 'hard',
};

export const tasks: Task[] = [
  {
    id: '8026118336',
    name: 'Порахуйте символи у вашому рядку',
    description: 'Основна ідея полягає в тому, щоб підрахувати всі символи, що зустрічаються в рядку. Якщо у вас є такий рядок, як aba, то результат має бути {\'a\': 2, \'b\': 1}.\n' +
      '\n' +
      'Що робити, якщо рядок порожній? Тоді результатом має бути порожній літерал об’єкта {}.',
    level: level[3],
    functionTemplate: `function count(string) {
  // TODO
  return {};
}`,
  },
  {
    id: '5811466704',
    name: 'izi 2',
    description: 'izi2',
    level: level[3],
    functionTemplate: '',
  },
  {
    id: '6597241323',
    name: 'izi 3',
    description: 'izi3',
    level: level[3],
    functionTemplate: '',
  },
  {
    id: '9198776395',
    name: 'med 1',
    description: 'med 1',
    level: level[3],
    functionTemplate: '',
  },
  {
    id: '1570855712',
    name: 'med 2',
    description: 'med 2',
    level: level[2],
    functionTemplate: '',
  },
  {
    id: '8841195820',
    name: 'med 3',
    description: 'med 3',
    level: level[2],
    functionTemplate: '',
  },
  {
    id: '7480501260',
    name: 'hard 1',
    description: 'hard 1',
    level: level[1],
    functionTemplate: '',
  },
  {
    id: '3474758225',
    name: 'hard 2',
    description: 'hard 2',
    level: level[1],
    functionTemplate: '',
  },
  {
    id: '6696867013',
    name: 'hard 3',
    description: 'hard 3',
    level: level[1],
    functionTemplate: '',
  },
];
