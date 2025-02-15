import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { cn } from "../utils/utils";
import CompleteIcon from "./Button/CompleteButton";
import DeleteIcon from "./Button/DeleteButton";
import EditButton from "./Button/EditButton";
import SaveButton from "./Button/SaveButton";

import { TodoItemProps } from "../App";

export const TodoItem = ({
  todoId,
  name,
  isCompleted,
  updateTodo,
  deleteTodo,
  toggleTodo,
}: {
  todoId: string;
  name: string;
  isCompleted: boolean;
} & TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const openEditor = () => {
    setIsEditing(true);
  };

  /* NOTE TO BRO: no need to specify event object as parameter */
  const handleNameChange = (newName: string) => {
    setEditedName(newName);
  };

  /*  NOTE TO BRO: "impure" function, no need to specify todoId and editedName as parameter */
  const handleSave = () => {
    setIsEditing(false);
    updateTodo(todoId, editedName);
  };

  return (
    <div style={{ display: "flex" }}>
      <Button
        fullWidth={true}
        style={{
          justifyContent: "space-between",
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
        endIcon={
          <>
            {isEditing ? (
              <SaveButton handleSave={handleSave} />
            ) : (
              <EditButton openEditor={openEditor} />
            )}
            <DeleteIcon todoId={todoId} deleteTodo={deleteTodo} />
          </>
        }
        // isCompleted ? 'strikethrough' : ''
        className={cn({ strikethrough: isCompleted })}
      >
        {isEditing ? (
          <TextField
            value={editedName}
            onChange={(e) => handleNameChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave();
              }
            }}
            onBlur={() => handleSave()}
            autoFocus
            style={{ textAlign: "left" }}
          />
        ) : (
          <span style={{ textAlign: "left" }}>{name}</span>
        )}
      </Button>
    </div>
  );
};
