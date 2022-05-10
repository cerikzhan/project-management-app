import { ColumnItem } from './Column';

export interface Board {
  id: string;
  title: string;
}

export interface BoardItem extends Board {
  columns: ColumnItem[];
}
