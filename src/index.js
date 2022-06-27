import React from 'react'
import ReactDOM from 'react-dom/client'
import AllRoutes from './routes'
import { Provider } from 'react-redux'
import store from './store/config'
import './styles/style.css'
import './styles/customStyles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AllRoutes />
		</Provider>
	</React.StrictMode>
)
