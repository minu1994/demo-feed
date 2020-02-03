import React from 'react';
import Feed from "../Feed";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    return (
        <div>
            <ToastContainer/>
            <Feed/>
        </div>
    )
}

export default App;
