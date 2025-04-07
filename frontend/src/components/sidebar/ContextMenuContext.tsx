import React, { createContext, ReactNode, useContext, useState } from "react";

interface ContextMenuContextProps {
  contextMenu: { show: boolean; x: number; y: number };
  setContextMenu: React.Dispatch<
    React.SetStateAction<{ show: boolean; x: number; y: number }>
  >;
  closeContextMenu: () => void;
}

const ContextMenuContext = createContext<ContextMenuContextProps | undefined>(
  undefined,
);

interface ContextMenuProviderProps {
  children: ReactNode;
}

const ContextMenuProvider = ({ children }: ContextMenuProviderProps) => {
  const initialContextMenu = { show: false, x: 0, y: 0 };
  const [contextMenu, setContextMenu] = useState(initialContextMenu);

  const closeContextMenu = () => {
    setContextMenu(initialContextMenu);
  };

  const value: ContextMenuContextProps = {
    contextMenu,
    setContextMenu,
    closeContextMenu,
  };

  return (
    <ContextMenuContext.Provider value={value}>
      {children}
    </ContextMenuContext.Provider>
  );
};

const useContextMenuContext = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error(
      "useContextMenuContext must be used within a ContextMenuProvider",
    );
  }
  return context;
};

export { ContextMenuProvider, useContextMenuContext };
