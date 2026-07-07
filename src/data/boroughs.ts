export interface Borough {
  id: string;
  name: string;
  postcodes: string[];
  region: 'North' | 'South' | 'East' | 'West' | 'Central';
  estimatedResponseTime: string;
}

const rawBoroughs: Omit<Borough, 'id'>[] = [
  { name: "Barking and Dagenham", postcodes: ["IG11", "RM8", "RM9", "RM10"], region: "East", estimatedResponseTime: "30-45 mins" },
  { name: "Barnet", postcodes: ["EN4", "EN5", "N2", "N3", "N11", "N12", "N20", "NW4", "NW7", "NW9", "NW11"], region: "North", estimatedResponseTime: "45-60 mins" },
  { name: "Bexley", postcodes: ["DA1", "DA5", "DA6", "DA7", "DA8", "DA14", "DA15", "DA16", "DA17", "SE2"], region: "East", estimatedResponseTime: "40-55 mins" },
  { name: "Brent", postcodes: ["HA0", "HA9", "NW2", "NW6", "NW9", "NW10"], region: "West", estimatedResponseTime: "30-50 mins" },
  { name: "Bromley", postcodes: ["BR1", "BR2", "BR3", "BR4", "BR5", "BR6", "BR7", "SE19", "SE20", "SE26", "TN16"], region: "South", estimatedResponseTime: "45-60 mins" },
  { name: "Camden", postcodes: ["EC1", "N1", "N6", "N19", "NW1", "NW3", "NW5", "NW6", "NW8", "WC1", "WC2"], region: "Central", estimatedResponseTime: "20-35 mins" },
  { name: "Croydon", postcodes: ["CR0", "CR2", "CR4", "CR5", "CR7", "CR8", "SE19", "SE25", "SE27"], region: "South", estimatedResponseTime: "35-50 mins" },
  { name: "Ealing", postcodes: ["W3", "W4", "W5", "W7", "W13", "UB1", "UB2", "UB5", "UB6"], region: "West", estimatedResponseTime: "30-45 mins" },
  { name: "Enfield", postcodes: ["EN1", "EN2", "EN3", "N9", "N13", "N14", "N18", "N21"], region: "North", estimatedResponseTime: "45-60 mins" },
  { name: "Greenwich", postcodes: ["SE2", "SE3", "SE7", "SE8", "SE9", "SE10", "SE12", "SE13", "SE18", "SE28"], region: "East", estimatedResponseTime: "30-45 mins" },
  { name: "Hackney", postcodes: ["E1", "E2", "E5", "E8", "E9", "E10", "N1", "N4", "N15", "N16"], region: "East", estimatedResponseTime: "25-40 mins" },
  { name: "Hammersmith and Fulham", postcodes: ["W6", "W12", "W14", "SW6"], region: "West", estimatedResponseTime: "20-35 mins" },
  { name: "Haringey", postcodes: ["N4", "N6", "N8", "N10", "N11", "N15", "N17", "N22"], region: "North", estimatedResponseTime: "30-45 mins" },
  { name: "Harrow", postcodes: ["HA1", "HA2", "HA3", "HA5", "HA7", "HA8"], region: "West", estimatedResponseTime: "45-60 mins" },
  { name: "Havering", postcodes: ["RM1", "RM2", "RM3", "RM4", "RM5", "RM6", "RM7", "RM11", "RM12", "RM14"], region: "East", estimatedResponseTime: "50-65 mins" },
  { name: "Hillingdon", postcodes: ["UB3", "UB4", "UB7", "UB8", "UB10", "HA4", "HA6"], region: "West", estimatedResponseTime: "50-70 mins" },
  { name: "Hounslow", postcodes: ["TW3", "TW4", "TW5", "TW7", "TW8", "TW13", "TW14", "W4"], region: "West", estimatedResponseTime: "40-55 mins" },
  { name: "Islington", postcodes: ["EC1", "N1", "N5", "N7", "N19"], region: "Central", estimatedResponseTime: "20-30 mins" },
  { name: "Kensington and Chelsea", postcodes: ["W8", "W10", "W11", "W14", "SW1", "SW3", "SW5", "SW7", "SW10"], region: "Central", estimatedResponseTime: "20-30 mins" },
  { name: "Kingston upon Thames", postcodes: ["KT1", "KT2", "KT3", "KT4", "KT5", "KT6", "KT9"], region: "South", estimatedResponseTime: "40-55 mins" },
  { name: "Lambeth", postcodes: ["SE1", "SE11", "SE19", "SE24", "SE27", "SW2", "SW4", "SW8", "SW9", "SW12", "SW16"], region: "Central", estimatedResponseTime: "25-35 mins" },
  { name: "Lewisham", postcodes: ["SE3", "SE4", "SE6", "SE8", "SE12", "SE13", "SE14", "SE23", "SE26"], region: "South", estimatedResponseTime: "30-45 mins" },
  { name: "Merton", postcodes: ["CR4", "SM4", "SW19", "SW20"], region: "South", estimatedResponseTime: "35-50 mins" },
  { name: "Newham", postcodes: ["E6", "E7", "E12", "E13", "E15", "E16", "E20", "IG11"], region: "East", estimatedResponseTime: "30-45 mins" },
  { name: "Redbridge", postcodes: ["IG1", "IG2", "IG3", "IG4", "IG5", "IG6", "IG7", "IG8", "E11", "E12", "E18", "RM6"], region: "East", estimatedResponseTime: "40-55 mins" },
  { name: "Richmond upon Thames", postcodes: ["TW1", "TW2", "TW9", "TW10", "TW11", "TW12", "SW13", "SW14"], region: "West", estimatedResponseTime: "40-55 mins" },
  { name: "Southwark", postcodes: ["SE1", "SE5", "SE11", "SE15", "SE16", "SE17", "SE21", "SE22", "SE24"], region: "Central", estimatedResponseTime: "20-35 mins" },
  { name: "Sutton", postcodes: ["SM1", "SM2", "SM3", "SM4", "SM5", "SM6", "CR0"], region: "South", estimatedResponseTime: "40-55 mins" },
  { name: "Tower Hamlets", postcodes: ["E1", "E2", "E3", "E14"], region: "Central", estimatedResponseTime: "20-30 mins" },
  { name: "Waltham Forest", postcodes: ["E4", "E10", "E11", "E17"], region: "East", estimatedResponseTime: "30-45 mins" },
  { name: "Wandsworth", postcodes: ["SW8", "SW11", "SW12", "SW15", "SW17", "SW18", "SW19"], region: "South", estimatedResponseTime: "25-40 mins" },
  { name: "Westminster", postcodes: ["EC4", "NW1", "NW8", "SW1", "W1", "W2", "WC2"], region: "Central", estimatedResponseTime: "15-30 mins" }
];

export const boroughsData: Borough[] = rawBoroughs.map((b) => ({
  ...b,
  id: b.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
}));
