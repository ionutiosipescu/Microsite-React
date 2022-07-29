import {
  ExpertisePharma,
  Contact,
  Dashboard,
  ExpertiseQuality,
  Home,
  Insight,
  Leadership,
  Brazil,
  InsightCase,
  InsightLatest,
  InsightCaseArticlePage,
  Digital,
  DigitalInsighthPodcast,
} from "../pages/";

export const routeNames = {
  home: "/",
  leadership: "/leadership",
  contact: "/contact",
  insightLatest: "/insights/latest",
  insightCase: "/insights/case",
  insightCaseArticlePage: "/insights/case/:id",

  expertise: "/expertise",
  expertiseQuality: "/expertise/quality",
  expertisePharma: "/expertise/pharma",

  brazilian: "/brazilian",
  dashboard: "/dashboard",
  digital: "/digital",
  digitalInsighthPodcast: "/digital/insights/:id",
};

export const routes = [
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
    path: routeNames.insightCaseArticlePage,
    exact: true,
    element: <InsightCaseArticlePage />,
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
    path: routeNames.brazilian,
    exact: true,
    element: <Brazil />,
  },
  {
    path: routeNames.dashboard,
    exact: true,
    element: <Dashboard />,
  },
  {
    path: routeNames.digital,
    exact: true,
    element: <Digital />,
  },
  {
    path: routeNames.digitalInsighthPodcast,
    exact: true,
    element: <DigitalInsighthPodcast />,
  },
];

export default routes;
