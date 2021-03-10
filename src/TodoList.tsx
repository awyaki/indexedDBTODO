/** @jsxImportSource @emotion/react */
import { FC, MouseEvent } from "react";
import { Interpolation, Theme } from "@emotion/react";
import { Todo } from "types";
import { colors } from "colors";

const flexContainer: Interpolation<Theme> = {
  display: "flex",
}

const todoListStyle: Interpolation<Theme> = {
  width: "100%",
  height: "90%",
  backgroundColor: colors.green.level0,
  borderRadius: "10px",
  marginBottom: ".7rem",
  overflow: "scroll",
};

const todoStyle: Interpolation<Theme> = {
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid ${colors.green.level2}`,
  padding: ".7rem 0 .7rem 1rem", 
  justifyContent: "space-between",
}; 

const titleStyle: Interpolation<Theme> = {
};

const checkBoxStyle: Interpolation<Theme> = {
  marginRight: ".6rem",
};

const deleteButtonStyle: Interpolation<Theme> = {
  backgroundColor: colors.orange,
  color: colors.white,
  borderRadius: "3px",
  padding: ".2rem .4rem",
  marginRight: "1rem",
};

type Props = {
  todos: Todo[]; 
  handleTodoDelete: (e: MouseEvent<HTMLButtonElement>, id: number) => void;
};

const TodoList: FC<Props> = (props) => {
  const { todos, handleTodoDelete } = props;
  return (
    <ul css={todoListStyle}>
      {todos.map((todo) => {
        return ( 
          <li css={todoStyle} key={todo.id}>
            <div css={flexContainer}>
              <input css={checkBoxStyle} type="checkbox" />
              <p css={titleStyle}>{todo.title}</p>
            </div>
            <button 
              css={deleteButtonStyle} 
              onClick={(e) => handleTodoDelete(e, todo.id)}>DEL</button>
          </li>
          );
      })}
    </ul>
  );
};

export default TodoList;