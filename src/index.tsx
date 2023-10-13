import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Dashboard} from './App'
import 'bulma/css/bulma.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)


//TODO: Cambiar Dashboard por el router

root.render(
    <React.StrictMode>
    <BrowserRouter>
           <Dashboard />      
    </BrowserRouter>
 
    </React.StrictMode>,
)
