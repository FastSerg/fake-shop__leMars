import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from 'container/App/App'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
)
