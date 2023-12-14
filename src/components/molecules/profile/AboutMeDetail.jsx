
function AboutMeDetail() {
  return (
    <div className="flex flex-col gap-6 text-[#475569]">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          <h3 className="text-xs font-medium text-[#1E293B]">POSITION</h3>
          <p className="font-normal">
            Theme designer at <span className="text-black">Bootstrap.</span>{" "}
          </p>
        </div>
        <div className="flex gap-[139px]">
          <div className="flex flex-col">
            <h3 className="text-xs font-medium text-[#1E293B]">PHONE</h3>
            <p className="font-normal">+32112345689 </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xs font-medium text-[#1E293B]">
              DATE OF BIRTH
            </h3>
            <p className="font-normal">01.10.1997 </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[88px]">
        <div className="flex flex-col">
          <h3 className="text-xs font-medium text-[#1E293B]">EMAIL</h3>
          <p className="font-normal">dashprops@gmail.com </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xs font-medium text-[#1E293B]">LOCATION</h3>
          <p className="font-normal">Ahmedabad, India</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeDetail;

{
  /* {aboutMeList.map((item,index) => (
        <div key={index} className={item.id}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))} */
}
