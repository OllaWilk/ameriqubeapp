import React, {
  createContext,
  useContext,
  ReactNode,
  FC,
  Dispatch,
  useReducer,
  useEffect,
} from 'react';
import { useLanguageAndRegionCookie } from '../utils/useLanguageAndRegionCookie';
import { Region, RegionType } from '../types/navigation-types';

type ActionType = { type: 'SET_NEW_REGION'; payload: RegionType };

const regionReducer = (state: RegionType, action: ActionType): RegionType => {
  switch (action.type) {
    case 'SET_NEW_REGION':
      return action.payload;
    default:
      return state;
  }
};

interface RegionContextType {
  region: RegionType;
  changeRegion: (region: RegionType) => void;
  dispatch: Dispatch<ActionType>;
}

const RegionContext = createContext<RegionContextType>({
  region: Region.USA,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeRegion: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
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
  const [state, dispatch] = useReducer(regionReducer, region);

  useEffect(() => {
    dispatch({ type: 'SET_NEW_REGION', payload: region });
  }, [region]);

  const handleChangeRegion = (newRegion: RegionType) => {
    changeRegion(newRegion);
    dispatch({ type: 'SET_NEW_REGION', payload: newRegion });
  };

  return (
    <RegionContext.Provider
      value={{ region: state, changeRegion: handleChangeRegion, dispatch }}
    >
      {children}
    </RegionContext.Provider>
  );
};
