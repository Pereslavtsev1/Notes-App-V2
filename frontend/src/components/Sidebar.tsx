import { useEffect, useRef } from "react";
import SidebarFooter from "./sidebar/SdiebarFooter";
import SidebarContent from "./sidebar/SidebarContent";
import SidebarHeader from "./sidebar/SidebarHeader";
import { useContextMenuContext } from "./sidebar/ContextMenuContext";

const Sidebar = () => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const { closeContextMenu } = useContextMenuContext();

  useEffect(() => {
    const handleScroll = () => {
      closeContextMenu();
    };

    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, [closeContextMenu]);
  return (
    <div
      className="flex h-dvh flex-col justify-between overflow-y-auto p-4"
      ref={scrollableDivRef}
    >
      <div className="space-y-6">
        <SidebarHeader />
        <SidebarContent />
      </div>
      <div className="mt-2">
        <SidebarFooter />
      </div>
    </div>
  );
};

export default Sidebar;
