import { BASE_API_URL } from '../../../utils/api';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date');
  try {
    const response = await fetch(`${BASE_API_URL}/${date}.json`);
    const data = await response.json();

    const { units } = data;

    const eventData: EventData[] = units.map((unit: EventData) => ({
      ...unit,
    }));

    return NextResponse.json({ events: eventData });
  } catch (e) {
    console.error(e);
  }
}
