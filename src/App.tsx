import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";

export type TodoType = { id: string; name: string; isCompleted: boolean };

export type TodoItemProps = {
  updateTodo: (todoId: string, newName: string) => void;
  toggleTodo: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
};

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

  // ----------These are event handlers--------------
  const addTodo = (name: string) => {
    const todoItem: TodoType = {
      id: uuidv4(),
      name: name,
      isCompleted: false,
    };

    //  Rest parameter copy the existing data after adding newTodoItem to prevent data from being refresh (because useState's initial state is an empty array)
    setTodoList([todoItem, ...todoList]);
  };

  const updateTodo = (todoId: string, newName: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, name: newName };
        }
        return todo;
      });
    });
  };

  const toggleTodo = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

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

      <TodoInput addTodo={addTodo} />
      {/* // NOTE TO BRO: No need to create TodoList if it's just a list of TodoItem */}
      {/* Solution: Use iteration method to create a list is more optimal */}
      {todoList.map((todo) => {
        return (
          // When using map method, "key" props is needed, its value must be unique
          // Reason: React detect changes of components by their keys -> Essential to apply proper key for components
          <TodoItem
            todoId={todo.id}
            key={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}
