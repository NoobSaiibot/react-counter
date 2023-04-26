const ButtonReset = (props) => {
  return (
    <button
      onClick={() => {
        props.setState(0);
      }}
    >
      Reset
    </button>
  );
};
export default ButtonReset;
