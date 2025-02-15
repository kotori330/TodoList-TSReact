import SaveAsTwoToneIcon from "@mui/icons-material/SaveAsTwoTone";

const SaveButton = ({ handleSave }: { handleSave: () => void }) => {
  return (
    <div onClick={() => handleSave()}>
      <SaveAsTwoToneIcon
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

export default SaveButton;
