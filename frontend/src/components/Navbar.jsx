import { useState } from "react";
import { Menu, Share2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import CreditsDisplay from "./CreditsDisplay.jsx";
import SideMenu from "./SideMenu.jsx";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const credits = 5; 

  return (
    
    <header className="w-full bg-white border-b border-gray-200/50 sticky top-0 z-40">
      <div className="max-w-full lg:max-w-full mx-auto flex items-center gap-4 py-4 px-4 sm:px-7">
        {/* Mobile menu button (only visible on small screens) */}
        <button
          onClick={() => setOpenSideMenu(!openSideMenu)}
          className="block lg:hidden hover:bg-gray-100 p-1 rounded"
          aria-label="Toggle menu"
        >
          {openSideMenu ? <X /> : <Menu />}
        </button>

        {/* LEFT: logo/title */}
        <div className="flex items-center gap-2">
          <Share2 className="text-blue-600" />
          <span className="text-lg font-medium text-black">ShareNow</span>
        </div>

        
        <div className="ml-auto flex items-center gap-4">
          <SignedIn>
            <Link to="/subscriptions">
              <CreditsDisplay credits={credits} />
            </Link>

            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Mobile side menu */}
      {openSideMenu && (
        <div className="lg:hidden w-full bg-white border-b border-gray-200 z-30">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
