import { lazy } from "react";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Dashboard from "../../pages/dashboard/Dashboard";
import Expertise from "../../pages/expertise/Expertise";
import Home from "../../pages/home/Home";
import Insight from "../../pages/insight/Insight";
import Leadership from "../../pages/leadership/Leadership";

export const routeNames = {
  home: "/",
  expertise: "/expertise",
  insight: "/insight",
  leadership: "/leadership",
  contact: "/contact",

  about: "/about",
  dashboard: "/dashboard",
};

const routes = [
  // {
  // 	path: routeNames.dashboard,
  // 	exact: true,
  // 	component: lazy(() => import('../../pages/Home')),
  // },
  {
    path: routeNames.home,
    exact: true,
    element: <Home />,
  },
  {
    path: routeNames.expertise,
    exact: true,
    element: <Expertise />,
  },
  {
    path: routeNames.insight,
    exact: true,
    element: <Insight />,
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
