import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  newTodoString: string;
  onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddBtnClick: () => void;
};

export const TodoInput = ({
  newTodoString,
  onNewTodoChange,
  onAddBtnClick,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        size="small"
        value={newTodoString}
        onChange={onNewTodoChange}
        style={{ margin: "1rem" }}
      />
      <Button
        variant="contained"
        onClick={onAddBtnClick}
        style={{ margin: "1rem" }}
      >
        Add
      </Button>
    </div>
  );
};
