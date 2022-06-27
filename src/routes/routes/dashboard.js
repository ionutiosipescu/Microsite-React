import { lazy } from 'react'
import About from '../../pages/about/About'
import Dashboard from '../../pages/dashboard/Dashboard'

export const routeNames = {
	about: '/',
	dashboard: '/dashboard',
}

const routes = [
	// {
	// 	path: routeNames.dashboard,
	// 	exact: true,
	// 	component: lazy(() => import('../../pages/Home')),
	// },
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
]

export default routes
