function DefaultInput({  inputLable ,type,placeholder,name,value,onChange,cls,inputCls}) {

    return (
      <div className={`flex flex-col gap-1 text-sm ${cls}`}>
        <span className="text-[#475569]">{inputLable}</span>
        <input
          className={
            `border outline-[#CBD5E1] border-[#CBD5E1] h-[42px] px-1 bg-white rounded-lg ${inputCls}`           
          }
          type={type}
          placeholder={placeholder}
          name={name}
          required
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default DefaultInput;