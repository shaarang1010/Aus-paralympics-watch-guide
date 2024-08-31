import { EventDetails } from '@paralympics-2024/shared-types';
import { BASE_API_URL } from '../../../utils/api';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date');
  try {
    const response = await fetch(`${BASE_API_URL}/${date}.json`);
    const data = await response.json();

    const { units } = data;

    const eventData: EventDetails[] = units.map((unit: EventDetails) => ({
      ...unit,
    }));

    return NextResponse.json({ events: eventData });
  } catch (e) {
    console.error(e);
  }
}
