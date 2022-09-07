import {
  Home,
  Leadership,
  Insights,
  SingleInsgightPage,
  ExpertisePage,
  IndustryPage,
  Location,
} from "../pages/"

export const routeNames = {
  home: "/",
  leadership: "/leadership",

  insights: "/insights",
  insightCaseArticlePage: "/insights/:id",

  expertise: "/expertise",
  expertisePage: "/expertise/:id",
  industryPage: "/industry/:id",

  location: "/location",
}

export const routes = [
  {
    path: routeNames.home,
    exact: true,
    element: <Home />,
  },

  {
    path: routeNames.expertisePage,
    exact: true,
    element: <ExpertisePage />,
  },
  {
    path: routeNames.industryPage,
    exact: true,
    element: <IndustryPage />,
  },

  {
    path: routeNames.insights,
    exact: true,
    element: <Insights />,
  },

  {
    path: routeNames.insightCaseArticlePage,
    exact: true,
    element: <SingleInsgightPage />,
  },
  {
    path: routeNames.leadership,
    exact: true,
    element: <Leadership />,
  },
  {
    path: routeNames.location,
    exact: true,
    element: <Location />,
  },
]

export default routes
