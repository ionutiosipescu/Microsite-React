import {
  ExpertisePharma,
  Contact,
  Dashboard,
  ExpertiseQuality,
  Home,
  Insight,
  Leadership,
  About,
  InsightCase,
  InsightLatest,
} from "../../pages/";

export const routeNames = {
  home: "/",
  leadership: "/leadership",
  contact: "/contact",
  insight: "/insight",
  insightLatest: "/insight/latest",
  insightCase: "/insight/case",

  expertise: "/expertise",
  expertiseQuality: "/expertise/quality",
  expertisePharma: "/expertise/pharma",

  about: "/about",
  dashboard: "/dashboard",
};

const routes = [
  {
    path: routeNames.home,
    exact: true,
    element: <Home />,
  },

  {
    path: routeNames.expertiseQuality,
    exact: true,
    element: <ExpertiseQuality />,
  },
  {
    path: routeNames.expertiseQuality,
    exact: true,
    element: <ExpertiseQuality />,
  },
  {
    path: routeNames.expertisePharma,
    exact: true,
    element: <ExpertisePharma />,
  },

  {
    path: routeNames.insight,
    exact: true,
    element: <Insight />,
  },
  {
    path: routeNames.insightLatest,
    exact: true,
    element: <InsightLatest />,
  },
  {
    path: routeNames.insightCase,
    exact: true,
    element: <InsightCase />,
  },
  {
    path: routeNames.leadership,
    exact: true,
    element: <Leadership />,
  },
  {
    path: routeNames.contact,
    exact: true,
    element: <Contact />,
  },
  {
    path: routeNames.about,
    exact: true,
    element: <About />,
  },
  {
    path: routeNames.dashboard,
    exact: true,
    element: <Dashboard />,
  },
];

export default routes;
