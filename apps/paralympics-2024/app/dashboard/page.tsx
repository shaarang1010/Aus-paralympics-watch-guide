import { Content } from '@ag.ds-next/react/content';
import { FiltersRow } from '../../containers/filters';
import { getAllDisciplines } from '../../utils/discipline';
import { getEventDates } from '../../utils/dates';

export default async function Dashbaord() {
  const response = await fetch('http://localhost:3000/api/athletes');

  if (!response.ok) {
    throw new Error('Failed to load athletes');
  }

  const classificationRequest = await fetch(
    'http://localhost:3000/api/classification'
  );
  const allAthletes = await response.json();
  const allClassifications = await classificationRequest.json();

  const allDisicplines = getAllDisciplines().map((d) => ({
    label: d.name.charAt(0).toUpperCase() + d.name.slice(1).toLowerCase(),
    value: d.id,
  }));

  const allDates = getEventDates();

  return (
    <Content>
      <FiltersRow
        allAthletes={allAthletes.athletes}
        classifications={allClassifications.classifications}
        allDisiciplines={allDisicplines}
        allDates={allDates}
      />
    </Content>
  );
}
