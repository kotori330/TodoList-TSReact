import { Button, TextField } from "@mui/material";
import CompleteIcon from "./Button/CompleteButton";
import DeleteIcon from "./Button/DeleteButton";
import EditButton from "./Button/EditButton";
import SaveButton from "./Button/SaveButton";
import { cn } from "../App";
import { ChangeEvent, useState, KeyboardEvent as ReactKeyboardEvent} from "react";

export const TodoItem = ({
  todoId,
  name,
  isCompleted,
  updateIsCompleted,
  handleEditToggle,
  handleEnterDown,
  deleteTodo,
  handleSaveClick: handleSaveClickProp
}: {
  todoId: string;
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
  handleEditToggle: (todoId: string, newName: string) => void;
  handleEnterDown: (e: ReactKeyboardEvent<HTMLInputElement>, todoId: string, editedName: string) => void;
  deleteTodo: (todoId: string) => void;
  handleSaveClick: (todoId: string, editedName: string) => void
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleSaveClick = (todoId: string, editedName: string) => {
    setIsEditing(false);
    handleSaveClickProp(todoId, editedName);
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
        onClick={() => updateIsCompleted(todoId)}
        startIcon={
          <>
            <CompleteIcon isCompleted={isCompleted} />
          </>
        }
        endIcon={
          <>
            {isEditing ? (
              <SaveButton todoId={todoId} handleSaveClick={handleSaveClick} />
            ) : (
              <EditButton todoId={todoId} handleEditToggle={handleEditClick} />
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
            onChange={handleNameChange}
            onKeyDown={(e) => handleEnterDown(e as ReactKeyboardEvent<HTMLInputElement>, todoId, editedName)}
            onBlur={handleSaveClick}
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
