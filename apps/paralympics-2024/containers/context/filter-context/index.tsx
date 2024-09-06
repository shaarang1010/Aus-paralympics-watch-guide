import { createContext, PropsWithChildren } from 'react';
import type { DefaultComboboxOption } from '@ag.ds-next/react/combobox';
import { Athlete } from '@paralympics-2024/shared-types';

type FilterContextType = {
  athletes: DefaultComboboxOption[];
  setAtheletes: (athletes: DefaultComboboxOption) => void;
  classification: DefaultComboboxOption[];
  setClassification: (classification: DefaultComboboxOption) => void;
  date: DefaultComboboxOption | null;
  setDate: (date: DefaultComboboxOption) => void;
  dicipline: DefaultComboboxOption | null;
  setDiscipline: (dicipline: DefaultComboboxOption) => void;
  filteredAthletes: Athlete[];
  setFilteredAthletes: (athletes: Athlete) => void;
};

const emptyFunction = () => {
  console.log('This is an empty function');
};

export const FilterContext = createContext<FilterContextType>({
  athletes: [],
  setAtheletes: emptyFunction,
  classification: [],
  setClassification: () => emptyFunction,
  date: null,
  setDate: () => emptyFunction,
  dicipline: null,
  setDiscipline: () => emptyFunction,
  filteredAthletes: [],
  setFilteredAthletes: () => emptyFunction,
});

export const FilterProvider: React.FC<PropsWithChildren<FilterContextType>> = ({
  athletes,
  setAtheletes,
  setClassification,
  setDate,
  setDiscipline,
  date,
  dicipline,
  classification,
  filteredAthletes,
  setFilteredAthletes,
  children,
}) => {
  return (
    <FilterContext.Provider
      value={{
        athletes,
        classification,
        setAtheletes,
        setClassification,
        setDate,
        setDiscipline,
        setFilteredAthletes,
        filteredAthletes,
        date,
        dicipline,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
