import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {


    const [dataUser, setUser] = useState([]);//Hook

    useEffect(() => {

        axios.get('https://clinic-appointments-mongodb.herokuapp.com/user')
            .then((res) => {
                console.log(res.data);
                setUser(res.data);



            }).catch((err) => {
                console.log(err);
            });

    }, []);

    const userData = (data) => {
        //console.log(appointment.title);
        let storage = JSON.parse(localStorage.setItem("User"));
        console.log(storage);
    }

    return (
        <div className="container">
            <div className="title">
                HERE IS YOUR PERSONAL DATA
              </div>
            <div className="appointmentContainer">
                {dataUser.map(Users =>
                    <div className="cardAppointment" key={Users._id} onClick={() =>
                        userData(Users)}>{Users.username}
                        <br></br>
                        {Users.email}
                    </div>
                )}
            </div>
            {/* 
          <div className="appointmentContainer">
              {dataUser.map(storage =>
                  <div className="cardAppointment" key={storage._id} onClick={() =>
                      userData(storage)}>{storage.username}
                      <br></br>
                      {storage.email}
                  </div>
              )}
          </div> */}
        </div>
    );

}

export default Profile
