import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

const EditButton = ({ openEditor }: { openEditor: () => void }) => {
  return (
    <div
      onClick={openEditor}
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
      <EditTwoToneIcon
        color="primary"
        sx={{
          display: "flex",
          alignItems: "center"
        }}
      />
    </div>
  );
};

export default EditButton;