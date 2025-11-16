import Navbar from "../components/Navbar.jsx";
import SideMenu from "../components/SideMenu.jsx";

const DashboardLayout = ({ children, activeMenu }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top full-width navbar */}
      <Navbar activeMenu={activeMenu} />

      {/* Below navbar: two-column layout */}
      <div className="flex">
        {/* Sidebar shows on lg and above */}
        <div className="hidden lg:block">
          <SideMenu activeMenu={activeMenu} />
        </div>

        {/* Main content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
