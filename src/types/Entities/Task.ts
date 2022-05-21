export interface Task {
  id: string;
  title: string;
  order: number;
  done: boolean;
  description: string;
  userId: string | null;
  files: string[];
}

export interface TaskItem extends Task {
  boardId: string | null;
  columnId: string | null;
}
