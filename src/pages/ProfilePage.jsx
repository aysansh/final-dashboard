import Protect from "../components/templates/general/Protect";
import AccountBox from "../components/organisms/profile/AccountBox";
import Layout from "../components/templates/general/Layout";
import OverviewPage from "../components/templates/profile/OverviewPage";

function ProfilePage() {
  return (
    <Protect>
      <Layout>
        <div className="flex flex-col w-full gap-8 text-gray-900 max-w-5xl p-8 bg-[#F4F6F8]">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-2xl font-bold">Overview</h1>
          <AccountBox />
        </div>
        <OverviewPage />
      </div>
      </Layout>
      
   </Protect>
  );
}

export default ProfilePage;
