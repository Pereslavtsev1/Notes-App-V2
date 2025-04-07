import React, { useRef } from "react";
import { Folder, Plus, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import NoteRenderList from "./NoteRenderList";
import mockNotes from "@/mockdata";

const SidebarContent = () => {
  const [showFavorites, setShowFavotrites] = useState<boolean>(true);
  const [showWorkspaces, setShowWorkspaces] = useState<boolean>(true);

  return (
    <div className="flex w-full flex-col gap-2">
      <Button
        variant={"sidebar"}
        onClick={() => setShowFavotrites((prev) => !prev)}
      >
        <Star className="fill-foreground" />
        Favorites
      </Button>
      <div className="pl-6">
        {showFavorites && <NoteRenderList notes={mockNotes} />}
      </div>
      <button
        className="base-button justify-between"
        onClick={() => setShowWorkspaces((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          <Folder className="fill-foreground size-4" />
          Workspace
        </div>
        <Plus className="size-4 cursor-pointer rounded dark:hover:bg-[#202020]" />
      </button>
      <div className="pl-6">
        {showWorkspaces && <NoteRenderList notes={mockNotes} />}
      </div>
    </div>
  );
};

export default SidebarContent;
