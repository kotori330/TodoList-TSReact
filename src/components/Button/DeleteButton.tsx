import CloseIcon from "@mui/icons-material/Close";

const DeleteIcon = ({
  todoId,
  deleteTodo,
}: {
  todoId: string;
  deleteTodo: (todoId: string) => void;
}) => {
  return (
    // Basic Javascript knowledge:
    // If written like this: "onClick={deleteTodo(todoId)}", the function deleteTodo() will execute immediately because deleteTodo() is the way of calling a function, not referencing the function. Write like below will make the function wait until the event listener onClick listened an event, AND also allow to pass in argument of the reference function
    // Alternative: If reference func don't have argument -> onClick={deleteTodo} is fine.
    <div onClick={() => deleteTodo(todoId)}>
      <CloseIcon
        color="primary"
        sx={{
          margin: "0.005rem 0.5rem",
          "&:hover": {
            backgroundColor: "#E5e5e5",
            transition: "0.3s",
          },
        }}
      />
    </div>
  );
};

export default DeleteIcon;
