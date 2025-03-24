import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
import './index.css'
import { MainApp } from './09-UseContext/MainApp';
import { BrowserRouter } from 'react-router-dom';
//import { CallBackHook } from './06-memos/CallBackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import "./08-useReducer/intro-reducer"
// import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(

    //<React.StrictMode>
        //{/* <HooksApp /> */}
        //{/* <CounterApp /> */}
        //{/* <CounterWithCustomHook /> */}
        
        // < TodoApp />

    

    //</React.StrictMode>

    <BrowserRouter>
        <MainApp />
    </BrowserRouter>

    

)