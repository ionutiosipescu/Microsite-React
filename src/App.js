import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './components/layout'
import routes from './routes/routes'
import store from './store/config'

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Routes>
					{routes.map((route, i) => {
						return <Route key={i} {...route} />
					})}
				</Routes>
			</Layout>
		</BrowserRouter>
	</Provider>
)

export default App
