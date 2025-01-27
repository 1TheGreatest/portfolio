import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  RefObject,
} from "react";

// Define a type for the section refs
type SectionRefs = {
  [key: string]: RefObject<HTMLDivElement>;
};

const ScrollContext = createContext<SectionRefs | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  // Create refs for multiple sections
  const sectionRefs: SectionRefs = {
    Hero: useRef<HTMLDivElement>(null),
    Projects: useRef<HTMLDivElement>(null),
    GetInTouch: useRef<HTMLDivElement>(null),
  };

  return (
    <ScrollContext.Provider value={sectionRefs}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = (): SectionRefs => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
