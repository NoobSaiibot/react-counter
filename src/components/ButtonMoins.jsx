const ButtonMoins = (props) => {
  return (
    <button
      className="Moins"
      onClick={() => {
        props.setState(props.state - 1);
      }}
    >
      -
    </button>
  );
};
export default ButtonMoins;
