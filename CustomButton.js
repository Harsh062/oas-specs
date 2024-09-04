const CustomButton = ({ children }) => {
  return (
    <button style={{ backgroundColor: "blue", color: "white" }}>
      {children}
    </button>
  );
};

export default CustomButton;
