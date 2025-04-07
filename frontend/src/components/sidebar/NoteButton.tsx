// NoteButton.tsx
import React, { useState } from "react";
import { Note } from "@/types";
import { Ellipsis } from "lucide-react";
import { helper } from "@/functions";
import ContextMenu from "./ContextMenu";
import { useContextMenuContext } from "./ContextMenuContext";

type NoteButtonProps = {
  note: Note;
  className?: string;
};

const NoteButton = ({ note, className }: NoteButtonProps) => {
  const { contextMenu, setContextMenu, closeContextMenu } =
    useContextMenuContext();
  const [isHovered, setIsHovered] = useState(false);

  const handleEllipsisClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setContextMenu({ show: true, x: e.pageX, y: e.pageY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {contextMenu.show && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          close={closeContextMenu}
        />
      )}
      <button
        className={`base-button justify-between ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {helper(note.title)}
        {isHovered && (
          <Ellipsis
            onClick={handleEllipsisClick}
            className="size-4.5 cursor-pointer"
          />
        )}
      </button>
    </>
  );
};

export default NoteButton;
