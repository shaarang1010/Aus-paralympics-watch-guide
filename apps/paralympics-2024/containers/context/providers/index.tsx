'use client';
import { PropsWithChildren, useState } from 'react';
import { FilterProvider } from '../filter-context';

type FilterChoiceProps = { label: string; value: string };

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedAthletes, setSelectedAtheletes] = useState<
    FilterChoiceProps[]
  >([]);
  const [selectedClassification, setSelectedClassification] = useState<
    FilterChoiceProps[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<FilterChoiceProps | null>(
    null
  );
  const [selectedDiscipline, setSelectedDiscipline] =
    useState<FilterChoiceProps | null>(null);

  const setAtheletes = (athlete: FilterChoiceProps) => {
    setSelectedAtheletes([...selectedAthletes, athlete]);
  };

  const setClassification = (classification: FilterChoiceProps) => {
    setSelectedClassification([...selectedClassification, classification]);
  };
  return (
    <FilterProvider
      athletes={selectedAthletes}
      setAtheletes={setAtheletes}
      classification={selectedClassification}
      setClassification={setClassification}
      date={selectedDate}
      setDate={setSelectedDate}
      dicipline={selectedDiscipline}
      setDiscipline={setSelectedDiscipline}
    >
      {children}
    </FilterProvider>
  );
};
