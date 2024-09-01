import { Columns } from '@ag.ds-next/react/columns';
import { Box } from '@ag.ds-next/react/box';
import { FiltersRow } from '../../containers/filters';
import { Athlete } from '@paralympics-2024/shared-types';
import { getAllDisciplines } from '../../utils/discipline';

export default async function Dashbaord() {
  const response = await fetch('http://localhost:3000/api/athletes');

  if (!response.ok) {
    throw new Error('Failed to load athletes');
  }
  const allAthletes = await response.json();

  const allDisicplines = getAllDisciplines().map((d) => ({
    label: d.name,
    value: d.id,
  }));

  return (
    <Box>
      <FiltersRow
        allAthletes={allAthletes.athletes}
        classifications={[]}
        allDisiciplines={allDisicplines}
      />
    </Box>
  );
}
