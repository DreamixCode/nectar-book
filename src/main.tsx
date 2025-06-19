import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter} from "react-router";

import './i18n.js';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </StrictMode>,
)
