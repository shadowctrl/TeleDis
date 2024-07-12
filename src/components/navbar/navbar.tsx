import "./navbar.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-components">
        <ul>
          <Link href="/">
            {" "}
            <li>Overview</li>
          </Link>
          <li>
            <Link href="/settings">Settings </Link>
          </li>
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
