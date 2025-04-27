import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './../global.css' ;
import Widgets from './widgets';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      
      <section className='m-5'>
        <Widgets />

      </section>
          
  </StrictMode>,
)
