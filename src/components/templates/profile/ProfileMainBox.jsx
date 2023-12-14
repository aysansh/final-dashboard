

function ProfileMainBox({ title, children }) {
  return (
    <div className="bg-white text-[#1E293B] rounded-lg w-full flex flex-col  h-fit shadow-main-shadow">
      <h2 className="text-base font-medium border-b border-[#E2E8F0] py-4 px-5">
        {title}
      </h2>
      <div className="flex flex-col p-5">{children}</div>
    </div>
  );
}

export default ProfileMainBox;
