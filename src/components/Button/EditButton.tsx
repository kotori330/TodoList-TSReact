import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

const EditButton = ({ openEditor }: { openEditor: () => void }) => {
  return (
    <div onClick={(e) => openEditor()}>
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
