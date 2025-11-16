import { useUser } from "@clerk/clerk-react";
import { User } from "lucide-react";
import { SIDE_MENU_DATA } from "../assets/data.js";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ activeMenu }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  // NOTE:
  // Use a width of 16rem (w-64) which matches the layout below.
  // Use sticky top so it stays below the navbar.
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-5 hidden lg:block">
      <div className="sticky top-[64px]">
        <div className="flex flex-col items-center gap-3 mt-3 mb-7">
          {user?.imageUrl ? (
            <img
              src={user.imageUrl}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <User className="w-20 h-20 text-gray-500" />
          )}
          <h5 className="text-gray-900 font-medium">{user?.fullName}</h5>
        </div>

        <nav>
          {SIDE_MENU_DATA.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 py-3 px-4 text-[15px] rounded-lg mb-3 text-left
                ${activeMenu === item.label ? "bg-purple-500 text-white" : "hover:bg-gray-100"}`}
            >
              <item.icon />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SideMenu;
