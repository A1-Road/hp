"use client";

import { createContext, useContext, ReactNode, useState } from "react";

interface LayoutContextType {
  isHeaderVisible: boolean;
  setIsHeaderVisible: (visible: boolean) => void;
  isFooterVisible: boolean;
  setIsFooterVisible: (visible: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  return (
    <LayoutContext.Provider
      value={{
        isHeaderVisible,
        setIsHeaderVisible,
        isFooterVisible,
        setIsFooterVisible,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
