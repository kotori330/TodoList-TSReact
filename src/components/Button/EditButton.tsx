import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

const EditButton = ({
  todoId,
  handleEditToggle,
}: {
  todoId: string;
  handleEditToggle: (todoId: string) => void;
}) => {
  return (
    <div onClick={() => handleEditToggle(todoId)}>
      <EditTwoToneIcon
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

export default EditButton;
