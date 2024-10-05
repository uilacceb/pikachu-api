export const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #ced4da",
    borderRadius: "4px",
    padding: "5px",
    fontWeight: 600,
    fontSize: "20px",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
    border: "1px solid #4CAF50",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#3D3D3D" // Background color when selected
      : state.isFocused
      ? "#ADADAD" // Background color when focused (highlighted by arrow keys)
      : "white", // Default background color
    color: state.isSelected
      ? "white" // Text color when selected
      : state.isFocused
      ? "white" // Text color when focused
      : "black", // Default text color
    padding: 10,
    fontWeight: state.isSelected ? "bold" : 500,
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#ADADAD", // Hover color
      color: "white",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6c757d",
    fontSize: "20px",
    fontWeight: 600,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#4CAF50",
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: "#999",
    padding: "10px",
    fontWeight: 500,
    fontSize: "18px",
  }),
};
