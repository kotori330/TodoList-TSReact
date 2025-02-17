import SaveAsTwoToneIcon from "@mui/icons-material/SaveAsTwoTone";

const SaveButton = ({ handleSave }: { handleSave: () => void }) => {
  return (
    <div
      onClick={handleSave}
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
      <SaveAsTwoToneIcon color="primary" />
    </div>
  );
};

export default SaveButton;
