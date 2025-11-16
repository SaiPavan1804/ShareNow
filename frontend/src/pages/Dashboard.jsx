import DashboardLayout from "../layout/DashboardLayout";
import { UserButton } from "@clerk/clerk-react";

const Dashboard = () => {
  return (
    <DashboardLayout activeMenu="Dashboard">
      <h1 className="text-2xl font-semibold">Dashboard Content</h1>
      <div className="mt-5">
        <UserButton />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
