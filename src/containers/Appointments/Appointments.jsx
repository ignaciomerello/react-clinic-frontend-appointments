import axios from 'axios';
import './Appointments.scss';
import React, { useEffect, useState } from 'react';
// import { useHistory } from "react-router";

const Appointment = () => {

    //HOOKS /////////////////////////////////////

    const [dataAppointments, setAppointments] = useState([]);


    ///////////////////////////////////////////////////

    useEffect(() => {

        axios.get('https://clinic-appointments-mongodb.herokuapp.com/appointments/showall')
            .then((res) => {
                console.log(res.data);
                setAppointments(res.data);

                localStorage.setItem("Appointments", JSON.stringify(res.data));

            }).catch((err) => {
                console.log(err);
            });

    }, []);

    const localizaConcretamente = (appointment) => {
        //console.log(appointment.title);
        let storage = JSON.parse(localStorage.getItem("Appointments"));
        console.log(storage);
    }

    return (
        <div className="container">
            <div className="title">
                HERE YOU CAN ACCESS TO ALL THE APPOINTMENTS SCHEDULED BY THE PATIENTS
                </div>
            <div className="appointmentContainer">
                {dataAppointments.map(appointment =>
                    <div className="cardAppointment" key={appointment._id} onClick={() =>
                        localizaConcretamente(appointment)}>{appointment.title}
                        <br></br>
                        {appointment.date}
                    </div>
                )}
            </div>
        </div>
    );

}

export default Appointment