## Event details scraping notes

The webpage has updated to where navigating to `/schedule` redirects you to the
schedule for each day rather than per sport.

To cater for the above change,

- Pass sport name to `/schedule/{sport-name}` this will redirect to `/schedule/{sport-name}/{date}`.

- For Date, use locator `<time>` element. `[data-row-type="competition-day-divider"] > <time>`

- For Events, use locator `a.unit`.

  Then for Event details, use locator `testid="dailyScheduleEvent"`

  Time = `span[data-testid="startTime"] > <time>`

  Name = `span.discipline-title`

  Description = `span.discipline-sub-title`

  Competitions = `div.h2h-competitor > span`
