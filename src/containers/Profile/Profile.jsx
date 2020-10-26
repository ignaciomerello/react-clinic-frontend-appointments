import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {


  const [dataUser, setUser] = useState([]);//Hook

  useEffect(() => {

      axios.get('https://clinic-appointments-mongodb.herokuapp.com/_id')
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
      </div>
  );

}

export default Profile
