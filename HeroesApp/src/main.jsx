
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { HeroesApp } from './HeroesApp';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <StrictMode>

        <BrowserRouter>

            <HeroesApp />
            
        </BrowserRouter>
        

    </StrictMode>

)