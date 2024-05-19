import { UserButton } from "@clerk/nextjs";
import LinksDropdown from "./links-dropdown";
import ThemeToggle from "./theme-toggle";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-muted py-4 sm:px-16 lg:px-4">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
export default Navbar;
