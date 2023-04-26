const ButtonReset = (props) => {
  return (
    <button
      className="Reset"
      onClick={() => {
        props.setState(0);
      }}
    >
      Reset
    </button>
  );
};
export default ButtonReset;
