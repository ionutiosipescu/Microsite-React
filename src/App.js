import React from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './components/layout'
import routes from './routes/routes'
import store from './store/config'
import PageNotFound from './pages/PageNotFound/PageNotFound'

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Routes>
						{routes.map((route, i) => {
							return <Route key={i} {...route} />
						})}
						<Route path='*' element={<PageNotFound/>}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	</Provider>
)

export default App
