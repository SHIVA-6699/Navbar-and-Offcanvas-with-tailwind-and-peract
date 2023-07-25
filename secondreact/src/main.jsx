import { render } from 'preact'
import { App } from './app.jsx'
import { Rep } from "./pages/Reports.jsx"
import './index.css'

render(<Rep/>, document.getElementById('app'))
