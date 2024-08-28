import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Region, RegionType } from '../types/navigation-types';

interface RegionContextType {
  region: RegionType;
  setRegion: (region: RegionType) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};

export const RegionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [region, setRegion] = useState<RegionType>(Region.EU);

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
};
