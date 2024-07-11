import "./navbar.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-components">
        <ul>
          <li>Overview</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="navbar-avatar">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
