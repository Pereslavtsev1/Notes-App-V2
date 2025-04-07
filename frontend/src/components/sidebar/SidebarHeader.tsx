import { Home, Search } from "lucide-react";
import { Button } from "../ui/button";

const SidebarHeader = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Button variant="sidebar">
        <Search strokeWidth={3} />
        Search
      </Button>
      <Button variant="sidebar">
        <Home />
        Home
      </Button>
    </div>
  );
};

export default SidebarHeader;
