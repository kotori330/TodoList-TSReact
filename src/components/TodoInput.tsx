import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const TodoInput = ({ addTodo }: { addTodo: (name: string) => void }) => {
  const [name, setName] = useState("");

  // No need to specify e object
  const handleNameChange = (name: string) => {
    setName(name);
  };

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
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
        style={{ margin: "1rem" }}
      />
      <Button
        variant="contained"
        onClick={() => {
          addTodo(name);
          setName("");
        }}
        style={{ margin: "1rem" }}
      >
        Add
      </Button>
    </div>
  );
};
