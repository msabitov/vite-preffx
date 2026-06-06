import { createRoot } from 'preffx'
import './index.css'
import { App } from './App.tsx'

const root = createRoot(document.getElementById('app'))
root.mount(<App />)
