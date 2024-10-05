export const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #ced4da",
    borderRadius: "4px",
    padding: "5px",
    fontWeight: 600,
    fontSize: "20px",
    width: "350px",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
    border: "1px solid #4CAF50",
    width: "350px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#3D3D3D"
      : state.isFocused
      ? "#ADADAD"
      : "white",
    color: state.isSelected ? "white" : state.isFocused ? "white" : "black",
    padding: 10,
    fontWeight: state.isSelected ? "bold" : 500,
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#ADADAD",
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
