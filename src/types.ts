
export type Id = {
  id: number;
}

export type TodoTitle = {
  title: string;
}

export type Todo = Id & TodoTitle;