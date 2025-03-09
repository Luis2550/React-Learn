import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import { Hola } from "./Hola";
import { CounterApp } from "./CounterApp";
import {Presentacion} from "./Presentacion"
import { getHeroes, direccion } from "./Heroes";

import "./css/estilos.css";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Hola/>
        <CounterApp valor={0}/>
        <Presentacion datosHeroes={getHeroes} datosDireccion={direccion}/>
    </React.StrictMode>
);
