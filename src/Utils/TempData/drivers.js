export const drivers = {
  loading: false,
  success: true,
  drivers: [
    {
      rank: 1,
      points: 25,
      firstname: 'Max',
      lastname: 'Verstappen',
      abbr: null,
    },
    {
      rank: 2,
      points: 18,
      firstname: 'Sergio',
      lastname: 'Perez',
      abbr: null,
    },
    {
      rank: 3,
      points: 15,
      firstname: 'Fernando',
      lastname: 'Alonso',
      abbr: null,
    },
    {
      rank: 4,
      points: 12,
      firstname: 'Carlos',
      lastname: 'Sainz',
      abbr: null,
    },
    {
      rank: 5,
      points: 10,
      firstname: 'Lewis',
      lastname: 'Hamilton',
      abbr: null,
    },
    {
      rank: 6,
      points: 8,
      firstname: 'Lance',
      lastname: 'Stroll',
      abbr: null,
    },
    {
      rank: 7,
      points: 6,
      firstname: 'George',
      lastname: 'Russell',
      abbr: null,
    },
    {
      rank: 8,
      points: 4,
      firstname: 'Valtteri',
      lastname: 'Bottas',
      abbr: null,
    },
    {
      rank: 9,
      points: 2,
      firstname: 'Pierre',
      lastname: 'Gasly',
      abbr: null,
    },
    {
      rank: 10,
      points: 1,
      firstname: 'Alexander',
      lastname: 'Albon',
      abbr: null,
    },
    {
      rank: 11,
      points: 0,
      firstname: 'Yuki',
      lastname: 'Tsunoda',
      abbr: null,
    },
    {
      rank: 12,
      points: 0,
      firstname: 'Logan',
      lastname: 'Sargeant',
      abbr: null,
    },
    {
      rank: 13,
      points: 0,
      firstname: 'Kevin',
      lastname: 'Magnussen',
      abbr: null,
    },
    {
      rank: 14,
      points: 0,
      firstname: 'Nyck',
      lastname: 'De Vries',
      abbr: null,
    },
    {
      rank: 15,
      points: 0,
      firstname: 'Nico',
      lastname: 'Hulkenberg',
      abbr: null,
    },
    {
      rank: 16,
      points: 0,
      firstname: 'Guanyu',
      lastname: 'Zhou',
      abbr: null,
    },
    {
      rank: 17,
      points: 0,
      firstname: 'Lando',
      lastname: 'Norris',
      abbr: null,
    },
    {
      rank: 0,
      points: 0,
      firstname: 'Charles',
      lastname: 'Leclerc',
      abbr: null,
    },
    {
      rank: 0,
      points: 0,
      firstname: 'Esteban',
      lastname: 'Ocon',
      abbr: null,
    },
    {
      rank: 0,
      points: 0,
      firstname: 'Oscar',
      lastname: 'Piastri',
      abbr: null,
    },
  ],
  httpStatusCode: 200,
};

export const driverDetails = {
  loading: false,
  success: true,
  driverDetails: {
    team: 'Red Bull Racing',
    country: 'Netherlands',
    podiums: '78',
    points: '2036.5',
    grandsPrixEntered: '164',
    worldChampionships: '2',
    highestRaceFinish: '1 (x36)',
    highestGridPosition: '1',
    dateOfBirth: '30/09/1997',
    placeOfBirth: 'Hasselt, Belgium',
    firstname: 'Max',
    lastname: 'Verstappen',
    abbr: null,
  },
  httpStatusCode: 200,
};

export const driverStandings = [
  {
    loading: false,
    success: true,
    title: '2023 Driver Standings',
    driverStandings: [
      {
        pos: 1,
        driver: {
          firstname: 'Max',
          lastname: 'Verstappen VER',
          abbr: 'VER',
        },
        nationality: 'NED',
        car: 'Red Bull Racing Honda RBPT',
        pts: 25,
      },
      {
        pos: 2,
        driver: {
          firstname: 'Sergio',
          lastname: 'Perez PER',
          abbr: 'PER',
        },
        nationality: 'MEX',
        car: 'Red Bull Racing Honda RBPT',
        pts: 18,
      },
      {
        pos: 3,
        driver: {
          firstname: 'Fernando',
          lastname: 'Alonso ALO',
          abbr: 'ALO',
        },
        nationality: 'ESP',
        car: 'Aston Martin Aramco Mercedes',
        pts: 15,
      },
      {
        pos: 4,
        driver: {
          firstname: 'Carlos',
          lastname: 'Sainz SAI',
          abbr: 'SAI',
        },
        nationality: 'ESP',
        car: 'Ferrari',
        pts: 12,
      },
      {
        pos: 5,
        driver: {
          firstname: 'Lewis',
          lastname: 'Hamilton HAM',
          abbr: 'HAM',
        },
        nationality: 'GBR',
        car: 'Mercedes',
        pts: 10,
      },
      {
        pos: 6,
        driver: {
          firstname: 'Lance',
          lastname: 'Stroll STR',
          abbr: 'STR',
        },
        nationality: 'CAN',
        car: 'Aston Martin Aramco Mercedes',
        pts: 8,
      },
      {
        pos: 7,
        driver: {
          firstname: 'George',
          lastname: 'Russell RUS',
          abbr: 'RUS',
        },
        nationality: 'GBR',
        car: 'Mercedes',
        pts: 6,
      },
      {
        pos: 8,
        driver: {
          firstname: 'Valtteri',
          lastname: 'Bottas BOT',
          abbr: 'BOT',
        },
        nationality: 'FIN',
        car: 'Alfa Romeo Ferrari',
        pts: 4,
      },
      {
        pos: 9,
        driver: {
          firstname: 'Pierre',
          lastname: 'Gasly GAS',
          abbr: 'GAS',
        },
        nationality: 'FRA',
        car: 'Alpine Renault',
        pts: 2,
      },
      {
        pos: 10,
        driver: {
          firstname: 'Alexander',
          lastname: 'Albon ALB',
          abbr: 'ALB',
        },
        nationality: 'THA',
        car: 'Williams Mercedes',
        pts: 1,
      },
      {
        pos: 11,
        driver: {
          firstname: 'Yuki',
          lastname: 'Tsunoda TSU',
          abbr: 'TSU',
        },
        nationality: 'JPN',
        car: 'AlphaTauri Honda RBPT',
        pts: 0,
      },
      {
        pos: 12,
        driver: {
          firstname: 'Logan',
          lastname: 'Sargeant SAR',
          abbr: 'SAR',
        },
        nationality: 'USA',
        car: 'Williams Mercedes',
        pts: 0,
      },
      {
        pos: 13,
        driver: {
          firstname: 'Kevin',
          lastname: 'Magnussen MAG',
          abbr: 'MAG',
        },
        nationality: 'DEN',
        car: 'Haas Ferrari',
        pts: 0,
      },
      {
        pos: 14,
        driver: {
          firstname: 'Nyck',
          lastname: 'De Vries',
          abbr: 'DEV',
        },
        nationality: 'NED',
        car: 'AlphaTauri Honda RBPT',
        pts: 0,
      },
      {
        pos: 15,
        driver: {
          firstname: 'Nico',
          lastname: 'Hulkenberg HUL',
          abbr: 'HUL',
        },
        nationality: 'GER',
        car: 'Haas Ferrari',
        pts: 0,
      },
      {
        pos: 16,
        driver: {
          firstname: 'Zhou',
          lastname: 'Guanyu ZHO',
          abbr: 'ZHO',
        },
        nationality: 'CHN',
        car: 'Alfa Romeo Ferrari',
        pts: 0,
      },
      {
        pos: 17,
        driver: {
          firstname: 'Lando',
          lastname: 'Norris NOR',
          abbr: 'NOR',
        },
        nationality: 'GBR',
        car: 'McLaren Mercedes',
        pts: 0,
      },
    ],
    httpStatusCode: 200,
  },
];
