/* node modules */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* app imports */
import AppOutletComponent from '@components/index.tsx';
import "@common/css/common.scss";

/* module */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppOutletComponent />
  </StrictMode>,
)
