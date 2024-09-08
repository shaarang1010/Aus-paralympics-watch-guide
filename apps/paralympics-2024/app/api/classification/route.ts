import { BASE_API_URL } from '../../../utils/api';
import { NextRequest, NextResponse } from 'next/server';
import { castClassifications } from '../../../utils/athlete';

export async function GET(request: NextRequest) {
  const optionalClassification =
    request.nextUrl.searchParams.get('classification');
  try {
    const response = await fetch(
      `${BASE_API_URL}/paralympics-athletes-2024.json`
    );
    const data = await response.json();

    const classifications = data as Array<Record<string, string>>;

    const allClassifications = castClassifications(classifications).map(
      (classification, index) => ({
        label: `${classification.trim()}`,
        value: `classification-${index}`,
      })
    );

    console.log('allClassifications', allClassifications);
    // if (optionalClassification) {
    //   const filteredClassifications = allClassifications.filter(
    //     (classification) => classification.label === optionalClassification
    //   );
    //   return NextResponse.json({ classification: filteredClassifications });
    // }

    return NextResponse.json({ classifications: allClassifications });
  } catch (e) {
    console.error(e);
  }
}
