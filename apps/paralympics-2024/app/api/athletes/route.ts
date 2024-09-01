import { Athlete } from '@paralympics-2024/shared-types';
import { BASE_API_URL } from '../../../utils/api';
import { NextRequest, NextResponse } from 'next/server';
import { castAthletes } from '../../../utils/athlete';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/paralympics-athletes-2024.json`
    );
    const data = await response.json();

    const allAthletes = data as Array<Record<string, string>>;

    const atheletesData: Athlete[] = castAthletes(allAthletes).map(
      (athlete, index) => ({
        ...athlete,
        label: `${athlete.name} ${athlete.surname}`,
        value: `athlete-${index}`,
      })
    );

    return NextResponse.json({ athletes: atheletesData });
  } catch (e) {
    console.error(e);
  }
}
