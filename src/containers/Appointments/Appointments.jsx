import axios from 'axios';
import './Appointments.scss';
import React, { useEffect, useState } from 'react';

const Appointment = () => {


    const [dataAppointments, setAppointments] = useState([]);//Hook

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

    const selectAppointments = (appointment) => {
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
                        selectAppointments(appointment)}>{appointment.title}
                        <br></br>
                        {appointment.date}
                    </div>
                )}
            </div>
        </div>
    );

}

export default Appointment