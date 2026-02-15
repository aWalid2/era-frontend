import ProfileCard from "../components/profile/ProfileCard";
import InfoCard from "../components/profile/InfoCard";

function Profile() {
  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl max-sm:text-2xl font-bold mb-1">
          User Profile
        </h1>
        <p className="text-gray-600 text-xl max-sm:text-sm">
          View and manage your account information
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:items-stretch items-stretch ">
        
        <div className="w-full sm:w-[35%] bg-white shadow rounded-xl p-4 sm:p-6 flex items-center justify-center">
          <ProfileCard />
        </div>

        <div className="w-full sm:w-[65%] min-h-full">
          <InfoCard />
        </div>

      </div>
    </div>
  );
}

export default Profile;
