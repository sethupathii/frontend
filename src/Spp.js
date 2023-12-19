import React, { useEffect, useState } from "react";
import App from "./App";
import('./styles/boot.css');
const Spp = () => {


    const [dateTime, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString();
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    };

    const formatDay = (date) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
    };


    const Pulsbtn = () => {
        setShow(true);
    }

    return (
        <div className="container-fluid">
            <div className="p-2 text-white rounded App">
                <h1 className="text-center">Todos</h1>
                <div className="d-inline text-white ps-5 m-2">Today is <h4 className="d-inline text-white">{formatDay(dateTime)}</h4></div>
                <h3 className="ps-5 m-2">{formatDate(dateTime)}</h3>
                <p className="h4 ps-5 m-2">{formatTime(dateTime)}</p>
                <h1 className="text-center curser:pointer but btn btn-outline-light d-flex justify-content-center" onClick={Pulsbtn}>Add Task</h1>
            </div>

            {show && <App />}




        </div>
    )
}

export default Spp;