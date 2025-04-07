import { Settings2, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const SidebarFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col space-y-2">
      <Button variant="sidebar">
        <Trash />
        Trash
      </Button>
      <Button variant="sidebar" onClick={() => navigate("/settings")}>
        <Settings2 />
        Settings
      </Button>
    </div>
  );
};

export default SidebarFooter;
