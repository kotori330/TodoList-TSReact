import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import clsx from "clsx";

export const cn = (...inputs: any[]) => clsx(...inputs);

export type TodoType = { id: string; name: string; isCompleted: boolean };

export default function App() {
  // ------------These are states------------------
  // const [todoList, setTodoList] = useState<{id: string; name: string}[]>([]); // This is inline type setting, but isn't recommended

  // Lazy initialization: là một kỹ thuật cho phép bạn khởi tạo state bằng một hàm thay vì một giá trị cụ thể. Điều này hữu ích khi giá trị khởi tạo cần tính toán phức tạp hoặc tốn thời gian, và bạn không muốn thực hiện tính toán đó mỗi khi component render.
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    // Nullish coalescing assignment: List can be null -> Use ?? to ensure JSON.parse work properly
    const savedTodoList = JSON.parse(localStorage.getItem("todoList") ?? "[]");
    // Conditional chaining: If list have AT LEAST one item
    if (savedTodoList?.length) {
      return savedTodoList;
    }
    return [];
  });

  // const [newTodoString, setNewTodoString] = useState(() => {return ''});
  const [newTodoString, setNewTodoString] = useState("");

  // ----------These are event handlers--------------
  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const onAddBtnClick = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false,
    };

    //  Spread operator copy the existing data after adding newTodoItem to prevent data from being refresh (because useState's initial state is an empty array)
    setTodoList([newTodoItem, ...todoList]);
    setNewTodoString("");
  };

  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  const handleEditToggle = (todoId: string, newName: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, name: newName };
        }
        return todo;
      });
    });
  };

  const handleEnterDown = (e: KeyboardEvent<HTMLInputElement>, todoId: string, editedName: string) => {
    if (e.key === "Enter") {
      handleEditToggle(todoId, editedName)
    } 
  }

  const handleSaveClick = (todoId: string, editedName: string) => {
    handleEditToggle(todoId, editedName)
  }

  const deleteTodo = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  // --------------useEffect hook to save to local storage-------------------
  // Update local storage whenever todoList is re-render
  // Local storage: Persist data even after the browser is closed and reopened
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  // ---------------------Render------------------
  return (
    <div style={{ margin: "0 auto", maxWidth: "40rem" }}>
      <h1 style={{ textAlign: "center" }}>This is Todo App</h1>

      <TodoInput
        onNewTodoChange={onNewTodoChange}
        newTodoString={newTodoString}
        onAddBtnClick={onAddBtnClick}
      />
      <TodoList
        todoList={todoList}
        updateIsCompleted={updateIsCompleted}
        handleEditToggle={handleEditToggle}
        handleEnterDown={handleEnterDown}
        deleteTodo={deleteTodo}

        handleSaveClickProp={handleSaveClick}
      />
    </div>
  );
}
