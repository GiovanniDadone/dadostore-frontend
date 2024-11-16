import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link className="flex bg-white items-center font-bold hover:text-purple-500" to="/user-profile">
        User Profile
      </Link>
      <Button onClick={() => logout()} className="flex items-center px-3 font-bold hover:text-purple-500">
        LogOut
      </Button>
    </>
  );
};

export default MobileNavLinks;