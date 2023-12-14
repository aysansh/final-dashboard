

function EditProfileBtn() {
  return (
    <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold ">Jitu Chauhan</h3>
            <a className="text-sm font-normal text-gray-600" href="">@imjituchauhan</a>
          </div>
          <button className="border border-[#624BFF] text-[#624BFF] rounded-lg text-sm font-semibold px-5 py-[14px]  bg-none">
            Edit Profile
          </button>
        </div>
  )
}

export default EditProfileBtn