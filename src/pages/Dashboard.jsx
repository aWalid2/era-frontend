import { FiUsers, FiFolder } from "react-icons/fi";
import { DashboardBox } from "../components/dashboard/DashboardBox";
import PiChart from "../components/dashboard/PiChart";
import TestChart from "../components/dashboard/GrowthChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-200 p-4 sm:p-6">
      <h1 className="pb-6 text-2xl font-bold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <DashboardBox
          title="Users"
          value={1}
          icon={<FiUsers />}
          borderColor="border-blue-600"
        />

        <DashboardBox
          title="Projects"
          value={0}
          icon={<FiFolder />}
          borderColor="border-green-600"
        />
        <DashboardBox
          title="Tasks"
          value={0}
          icon={<FiFolder />}
          borderColor="border-[#934f64]"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
        <TestChart />
        <PiChart />
      </div>
      <div className="mt-5 flex gap-2"></div>
    </div>
  );
}

export default Dashboard;
