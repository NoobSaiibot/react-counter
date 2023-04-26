const ButtonPlus = (props) => {
  return (
    <button
      onClick={() => {
        props.setState(props.state + 1);
      }}
    >
      +
    </button>
  );
};
export default ButtonPlus;
