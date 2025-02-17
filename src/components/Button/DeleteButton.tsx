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
    <div
      onClick={() => deleteTodo(todoId)}
      style={{
        padding: "0.5rem",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#E5e5e5";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <CloseIcon color="primary" />
    </div>
  );
};

export default DeleteIcon;
