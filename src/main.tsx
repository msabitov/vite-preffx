import { createRoot } from 'preffx'
import './index.css'
import { App } from './App.tsx'

const root = createRoot();
root.mount(App, {node: document.getElementById('app') as HTMLElement});
