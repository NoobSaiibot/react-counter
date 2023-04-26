const ButtonPlus = (props) => {
  return (
    <button
      className="Plus"
      onClick={() => {
        props.setState(props.state + 1);
      }}
    >
      +
    </button>
  );
};
export default ButtonPlus;
