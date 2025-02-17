import { Button, TextField } from "@mui/material";
import CompleteIcon from "./Button/CompleteButton";
import DeleteIcon from "./Button/DeleteButton";
import EditButton from "./Button/EditButton";
import SaveButton from "./Button/SaveButton";
import { cn } from "../utils/clsx";
import { useState } from "react";
import { TodoItemProps } from "../App";

export const TodoItem = ({
  todoId,
  name,
  isCompleted,
  updateTodo,
  toggleTodo,
  deleteTodo,
}: { todoId: string; name: string; isCompleted: boolean } & TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const openEditor = () => {
    setIsEditing(true); // flag
  };

  // NOTE TO BRO: no need to specify event object as parameter in event handle
  // Reason: Type of "e" obj is kinda long and unnecessary
  // Solution: Use "e" obj directly in component (line 69-70)
  const handleNameChange = (newName: string) => {
    setEditedName(newName);
  };

  // NOTE TO BRO: This is an "impure" function.
  // Reason: Call another function with out-of-scope parameter
  // Usage: no need to specify todoId and editedName as parameter in handleSave
  const handleSave = () => {
    setIsEditing(false);
    updateTodo(todoId, editedName);
  };

  return (
    <div className="todo-item" style={{ display: "flex" }}>
      <Button
        fullWidth={true}
        style={{
          justifyContent: "flex-start",
          flexGrow: 1,
          wordBreak: "break-word",
          textAlign: "left",
        }}
        onClick={() => toggleTodo(todoId)}
        startIcon={
          <>
            <CompleteIcon isCompleted={isCompleted} />
          </>
        }
        // isCompleted ? 'strikethrough' : ''
        className={cn({ strikethrough: isCompleted })}
      >
        {isEditing ? (
          <TextField
            size="small"
            value={editedName}
            onChange={(e) => {
              handleNameChange(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave();
              }
            }}
            onBlur={handleSave}
            autoFocus
            sx={{ textAlign: "left" }}
          />
        ) : (
          <span>{name}</span>
        )}
      </Button>
      <>
        {isEditing ? (
          <SaveButton handleSave={handleSave} />
        ) : (
          <EditButton openEditor={openEditor} />
        )}
        <DeleteIcon todoId={todoId} deleteTodo={deleteTodo} />
      </>
    </div>
  );
};
