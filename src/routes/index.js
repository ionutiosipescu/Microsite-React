import React from 'react'
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom'

import Layout from '../components/layout'
import routes from './routes'

const AllRoutes = () => (
	<BrowserRouter>
		<Layout>
			<Routes>
				{/* <Route path="/" element={<Layout />}> */}
				{routes.map((route, i) => {
					return <Route key={i} {...route} />
				})}
			</Routes>
		</Layout>
	</BrowserRouter>
)

export default AllRoutes
