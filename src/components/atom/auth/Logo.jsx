import logo from "../../../assets/img/logo.png"

function Logo({subText}) {
  return (
    <div className='flex flex-col gap-[10px] text-[#475569] text-sm font-normal'>
        <img width={116} height={31} src={logo}  />
        <p className='text-[#475569]'>{subText}</p>
    </div>
  )
}

export default Logo