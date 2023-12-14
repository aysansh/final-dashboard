function LargeButton({ btnName, onClick,btnStyle }) {
  return (
    <button
      className={` ${btnStyle}`}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
}

export default LargeButton;
