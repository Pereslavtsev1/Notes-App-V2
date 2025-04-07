import { Copy, Star, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

interface ContextMenuProps {
  x: number;
  y: number;
  onRemove?: () => void;
  onAddToFavorite?: () => void;
  close: () => void;
}

const ContextMenu = ({
  x,
  y,
  onRemove,
  onAddToFavorite,
  close,
}: ContextMenuProps) => {
  return (
    <div
      onMouseLeave={() => close()}
      className="bg-sidebar absolute z-50 flex flex-col space-y-2 overflow-hidden rounded-md p-2 shadow-md"
      style={{
        top: y,
        left: x,
      }}
    >
      <Button
        variant="sidebar"
        className="hover:bg-accent hover:text-accent-foreground w-3xs"
        onClick={onRemove}
      >
        <Trash2 />
        Remove
      </Button>
      <Button
        variant="sidebar"
        className="hover:bg-accent hover:text-accent-foreground w-3xs"
        onClick={onRemove}
      >
        <Copy />
        Copy
      </Button>
      <Button
        variant="sidebar"
        className="hover:bg-accent hover:text-accent-foreground w-3xs"
        onClick={onAddToFavorite}
      >
        <Star />
        Add to Favorite
      </Button>
    </div>
  );
};

export default ContextMenu;
