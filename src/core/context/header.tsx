import { createContext, ReactNode, useContext, useState } from 'react';

const initState: HeaderState = {
  sideNavOpen: true,
  setSideNavOpen: () => {},
};

const HeaderContext = createContext<HeaderState>(initState);

const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [sideNavOpen, setSideNavOpen] = useState(true);
  return (
    <HeaderContext.Provider value={{ sideNavOpen, setSideNavOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};

const useHeaderContext = () => {
  return useContext(HeaderContext);
};

interface HeaderState {
  sideNavOpen: boolean;
  setSideNavOpen: (isOpen: boolean) => void;
}

export { HeaderProvider, useHeaderContext };
