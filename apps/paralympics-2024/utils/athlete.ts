import { Athlete } from '@paralympics-2024/shared-types';
import flattenDeep from 'lodash/flattenDeep';
import uniq from 'lodash/uniq';

export const castAthletes = (data: Array<Record<string, string>>) => {
  return data.map(
    (athlete) =>
      ({
        name: athlete['Name'],
        surname: athlete['Surname'],
        age: parseInt(athlete['Age at 28 Aug']),
        gender: athlete['M/F'],
        sport: athlete['Sport'],
        events: athlete['Event (s)'],
        classification: athlete['Classification'],
        residentCity: athlete['Resident City'],
        state: athlete['State'],
        postcode: parseInt(athlete['Postcode']),
        city: athlete['Birth Place'],
      } as Athlete)
  );
};

export const castClassifications = (data: Array<Record<string, string>>) => {
  const allClassifications: string[] = [];
  data.forEach((athlete) => {
    allClassifications.push(athlete['Classification']);
  });
  return uniq(
    flattenDeep(
      allClassifications.map((classification) =>
        classification.toString().split(',')
      )
    )
  );
};
