import { createContext, PropsWithChildren } from 'react';
import type { DefaultComboboxOption } from '@ag.ds-next/react/combobox';

type FilterContextType = {
  athletes: DefaultComboboxOption[];
  setAtheletes: (athletes: DefaultComboboxOption) => void;
  classification: DefaultComboboxOption[];
  setClassification: (classification: DefaultComboboxOption) => void;
  date: DefaultComboboxOption | null;
  setDate: (date: DefaultComboboxOption) => void;
  dicipline: DefaultComboboxOption | null;
  setDiscipline: (dicipline: DefaultComboboxOption) => void;
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
        date,
        dicipline,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
