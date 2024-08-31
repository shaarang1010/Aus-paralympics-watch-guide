type EventDetails = {
  disciplineName: string;
  eventUnitName: string;
  id: string;
  disciplineCode: string;
  genderCode: string;
  eventCode: '';
  phaseCode: string;
  eventId: string;
  eventName: string;
  phaseId: string;
  phaseName: string;
  disciplineId: string;
  eventOrder: number;
  phaseType: string;
  eventUnitType: string;
  olympicDay: string;
  startDate: string;
  endDate: string;
  hideStartDate: boolean;
  hideEndDate: boolean;
  startText: string;
  order: number;
  venue: string;
  venueDescription: string;
  location: string;
  locationDescription: string;
  status: string;
  statusDescription: string;
  medalFlag: number;
  liveFlag: boolean;
  scheduleItemType: string;
  unitNum: string;
  sessionCode: string;
  groupId: string;
  competitors: Array<Competitor>;
};

type Competitor = {
  code: string;
  noc: string;
  name: string;
  order: number;
  results: {
    position: string;
    mark: string;
    medalType: string;
    irm: string;
  };
};

export { EventDetails };
