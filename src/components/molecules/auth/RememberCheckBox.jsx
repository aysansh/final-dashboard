function RememberCheckBox({ checkboxText, checkboxlink }) {
  return (
    <div className="flex gap-1">
      <input type="checkbox" className="w-4 h-4 border-[#CBD5E1]" />
      <div>
        <span>{checkboxText} </span>
      
      <span className="block"> {checkboxlink} </span>
      </div>
    </div>
  );
}

export default RememberCheckBox;
