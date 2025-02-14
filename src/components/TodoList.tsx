import { TodoType } from "../App";
import { TodoItem } from "./TodoItem";
import { KeyboardEvent } from "react";


export const TodoList = ({
  todoList,
  updateIsCompleted,
  handleEditToggle,
  handleEnterDown,
  deleteTodo,

  handleSaveClickProp
}: {
  todoList: TodoType[];
  updateIsCompleted: (todoId: string) => void;
  handleEditToggle: (todoId: string, newName: string) => void;
  handleEnterDown: (e: KeyboardEvent<HTMLInputElement>, todoId: string, editedName: string) => void;
  deleteTodo: (todoId: string) => void;

  handleSaveClickProp: () => void
}) => {
  return (
    <div>
      {/* When using map method, "key" props is needed, its value must be unique */}
      {/* Reason: React detect changes of components by their keys -> Essential to apply proper key for components  */}
      {todoList.map((todo) => {
        return (
          <TodoItem
            todoId={todo.id}
            key={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            updateIsCompleted={updateIsCompleted}
            handleEditToggle={handleEditToggle}
            handleEnterDown={handleEnterDown}
            deleteTodo={deleteTodo}


            handleSaveClick={handleSaveClickProp}
          />
        );
      })}
    </div>
  );
};
