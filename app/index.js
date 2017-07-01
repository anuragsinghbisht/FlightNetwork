import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home'

render(
    <Provider store={store}>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
