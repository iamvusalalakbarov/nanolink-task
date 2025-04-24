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
