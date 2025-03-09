import React from 'react';
import ReactDOM from 'react-dom/client';
// si se exporta por defecto puede ir cualquier nombre
import {App} from './HelloWorld';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <FirstApp title="quiero plataaaaa"/> */}
        <CounterApp value={0} />
    </React.StrictMode>
);
