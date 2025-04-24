import LiveTab from "../components/tabs/LiveTab.tsx";
import ResultsTab from "../components/tabs/ResultsTab.tsx";
import { Apparatus, Country, Status } from "./types.ts";

export const tabs = [
  {
    name: "Live",
    component: LiveTab,
    isLive: true,
  },
  {
    name: "Startlist",
  },
  {
    name: "Schedule",
  },
  {
    name: "Results",
    component: ResultsTab,
  },
  {
    name: "Medals",
  },
];

export const liveTabTableData = [
  {
    apparatus: Apparatus.FloorExercise,
    country: Country.AZE,
    bib: 212,
    name: "Amirbekov T.",
    d: 5.4,
    e: 8.8,
    p: 0.3,
    stats: [
      {
        name: "App",
        value: 12.5,
        rank: 7,
      },
      {
        name: "AA",
        value: 102.36,
        rank: 4,
      },
      {
        name: "Team",
        value: 102.36,
        rank: 12,
      },
    ],
    status: Status.Default,
  },
  {
    apparatus: Apparatus.PommelHorse,
    country: Country.RUS,
    bib: 132,
    name: "Amirbekov Teymur",
    status: Status.Wait,
  },
  {
    apparatus: Apparatus.Rings,
    country: Country.TUR,
    bib: 624,
    name: "Terim F.",
    d: 5.4,
    e: 8.8,
    p: 0.3,
    stats: [
      {
        name: "App",
        value: 12.5,
        rank: 7,
      },
      {
        name: "AA",
        value: 102.36,
        rank: 4,
      },
      {
        name: "Team",
        value: 102.36,
        rank: 12,
      },
    ],
    status: Status.Default,
  },
  {
    apparatus: Apparatus.PommelHorse,
    country: Country.RUS,
    bib: 624,
    name: "Terim F.",
    status: Status.Go,
  },
  {
    apparatus: Apparatus.ParallelBars,
    country: Country.ISR,
    bib: 401,
    name: "Wiltord T.",
    d: 5.4,
    e: 8.8,
    p: 0.3,
    stats: [
      {
        name: "App",
        value: 12.5,
        rank: 16,
      },
      {
        name: "AA",
        value: 102.36,
        rank: 8,
      },
      {
        name: "Team",
        value: 102.36,
        rank: 17,
      },
    ],
    status: Status.Default,
  },
  {
    apparatus: Apparatus.HorizontalBar,
    country: Country.GER,
    bib: 401,
    name: "Bakaev J.",
    d: 5.4,
    e: 8.8,
    p: 0.3,
    stats: [
      {
        name: "App",
        value: 12.5,
        rank: 16,
      },
      {
        name: "AA",
        value: 102.36,
        rank: 8,
      },
      {
        name: "Team",
        value: 102.36,
        rank: 17,
      },
    ],
    status: Status.Default,
  },
  {
    apparatus: Apparatus.HorizontalBar,
    country: Country.GER,
    bib: 401,
    name: "Bakaev J.",
    d: 5.4,
    e: 8.8,
    p: 0.3,
    stats: [
      {
        name: "App",
        value: 12.5,
        rank: 16,
      },
      {
        name: "AA",
        value: 102.36,
        rank: 8,
      },
      {
        name: "Team",
        value: 102.36,
        rank: 17,
      },
    ],
    status: Status.InquirySubmitted,
  },
];

export const apparatus = [
  {
    type: Apparatus.FloorExercise,
    title: "Floor Exercise",
  },
  {
    type: Apparatus.PommelHorse,
    title: "Pommel Horse",
  },
  {
    type: Apparatus.Rings,
    title: "Rings",
  },
  {
    type: Apparatus.Vault,
    title: "Vault",
  },
  {
    type: Apparatus.ParallelBars,
    title: "Parallel Bars",
  },
  {
    type: Apparatus.HorizontalBar,
    title: "Horizontal Bar",
  },
];

export const resultsTabTableData = [
  {
    country: Country.RUS,
    bib: 212,
    name: "Bonartsev Aleksandr",
    d: 43.833,
    e: 43.833,
    pen: 43.833,
    total: 102.256,
  },
  {
    country: Country.EST,
    bib: 132,
    name: "Bonartsev Aleksandr",
    d: 43.833,
    e: 43.833,
    pen: 43.833,
    total: 102.256,
  },
  {
    country: Country.POR,
    bib: 624,
    name: "Bonartsev Aleksandr",
    d: 43.833,
    e: 43.833,
    pen: 43.833,
    total: 102.256,
  },
  {
    country: Country.ISR,
    bib: 624,
    name: "Bonartsev Aleksandr",
    d: 43.833,
    e: 43.833,
    pen: 43.833,
    total: 102.256,
  },
  {
    country: Country.POL,
    bib: 401,
    name: "Bonartsev Aleksandr",
    d: 43.833,
    e: 43.833,
    pen: 43.833,
    total: 102.256,
  },
  {
    country: Country.NED,
    bib: 102,
    name: "Bonartsev Aleksandr",
    d: 43.833,
    e: 43.833,
    pen: 43.833,
    total: 102.256,
  },
  {
    country: Country.GBR,
    bib: 102,
    name: "Bonartsev Aleksandr",
    d: 43.833,
    e: 43.833,
    pen: 43.833,
    total: 102.256,
  },
];
