import React, { createContext, useContext, ReactNode, FC } from 'react';
import { useLanguageAndRegionCookie } from '../utils/useLanguageAndRegionCookie';
import { Region, RegionType } from '../types/navigation-types';

interface RegionContextType {
  region: RegionType;
  changeRegion: (region: RegionType) => void;
}

const RegionContext = createContext<RegionContextType>({
  region: Region.USA,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeRegion: () => {},
});

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};

export const RegionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { region, changeRegion } = useLanguageAndRegionCookie();

  return (
    <RegionContext.Provider value={{ region, changeRegion }}>
      {children}
    </RegionContext.Provider>
  );
};
