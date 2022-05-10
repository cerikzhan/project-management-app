import { Task } from './Task';

export interface Column {
  id: string;
  title: string;
  order: number;
}

export interface ColumnItem extends Column {
  tasks: Task[];
}
