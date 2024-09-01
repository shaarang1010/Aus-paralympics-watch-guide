'use client';
import { Box } from '@ag.ds-next/react/box';
import { Columns } from '@ag.ds-next/react/columns';
import { Combobox } from '@ag.ds-next/react/combobox';
import { Athlete } from '@paralympics-2024/shared-types';
import { useContext } from 'react';
import { FilterContext } from '../context/filter-context';

type Props = {
  allAthletes: Array<Athlete>;
  classifications: Array<Pick<Athlete, 'label' | 'value'>>;
  allDisiciplines: Array<Pick<Athlete, 'label' | 'value'>>;
  allDates: Array<{ label: string; value: string }>;
};

export const FiltersRow: React.FC<Props> = ({
  allAthletes,
  classifications,
  allDisiciplines,
  allDates,
}) => {
  const {
    athletes,
    setAtheletes,
    dicipline,
    setDiscipline,
    classification,
    setClassification,
    date,
    setDate,
  } = useContext(FilterContext);
  return (
    <Box>
      <Columns gap={1.5} cols={{ xs: 1, sm: 1, md: 3 }}>
        <Combobox
          label="Select Date"
          hint="Select competition date"
          options={allDates}
          value={date}
          onChange={(d) => setDate(d!)}
        />
        <Combobox
          label="Select Athletes"
          hint="Select one or more athletes"
          options={allAthletes}
          value={athletes[0]}
          onChange={(v) => setAtheletes(v!)}
        />
        {/* <Combobox
          label="Choose Classification"
          hint="Select one or more Classifications"
          options={classifications}
          value={classification[0]}
          onChange={(v) => setClassification(v!)}
        /> */}
        <Combobox
          label="Choose Discipline"
          hint="Select discipline"
          options={allDisiciplines}
          value={dicipline}
          onChange={(v) => setDiscipline(v!)}
        />
      </Columns>
    </Box>
  );
};
