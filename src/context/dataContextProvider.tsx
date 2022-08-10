import { createContext, ReactNode, useState } from "react";
import {FiltersEnum} from '../interfaces/data.interaface'
export interface DataContextInterface {
  filter: FiltersEnum;
  setStatusFilter: (filter: FiltersEnum) => void;
}
export interface PropsInterface {
  children: ReactNode;
}

export const DataContext = createContext<DataContextInterface | null>(null);
export const DataContextProvider = (props: PropsInterface) => {
  const [filter, setFilter] = useState(FiltersEnum.ALL);
  const setStatusFilter = (filter: FiltersEnum) => {
    setFilter(filter);
  };
  return (
    <DataContext.Provider
      value={{
        filter,
        setStatusFilter,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
