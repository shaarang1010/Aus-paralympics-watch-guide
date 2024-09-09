import { Content } from '@ag.ds-next/react/content';
import { FiltersRow } from '../../containers/filters';
import { getAllDisciplines } from '../../utils/discipline';
import { getEventDates } from '../../utils/dates';
import { castClassifications } from '../../utils/athlete';

export default async function Dashbaord() {
  const response = await fetch('http://localhost:3000/api/athletes');

  if (!response.ok) {
    throw new Error('Failed to load athletes');
  }

  const allAthletes = await response.json();
  const allClassifications = castClassifications(allAthletes.athletes).map(
    (classification, index) => ({
      label: `${classification.trim()}`,
      value: `classification-${index}`,
    })
  );

  const allDisicplines = getAllDisciplines().map((d) => ({
    label: d.name.charAt(0).toUpperCase() + d.name.slice(1).toLowerCase(),
    value: d.id,
  }));

  const allDates = getEventDates();

  return (
    <Content>
      <FiltersRow
        allAthletes={allAthletes.athletes}
        classifications={allClassifications}
        allDisiciplines={allDisicplines}
        allDates={allDates}
      />
    </Content>
  );
}
