import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const CompleteIcon = ({ isCompleted }: { isCompleted: boolean }) => {
  return (
    <div>{isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</div>
  );
};

export default CompleteIcon;
