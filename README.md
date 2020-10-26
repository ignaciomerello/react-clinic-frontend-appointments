# react-clinic-frontend-appointments
React Clinic Appointments MongoDB


GeeksHubs Academy React - MongoDB Project

This project is a FrontEnd for a Clinic Web Application.

When navigating throughout the site a user can Register, Login and Acccess to scheduled appointments according to their user "Role".


To check the deployed version of the FrontEnd you can visit the following link:

[Deployed App in Heroku servers](https://react-clinic-appointments.herokuapp.com)




## Languages and technologies used in the project:

* Javascript
* Node
* React

Additional libraries:

* AntDesign


Deployed Online Server Accessibility for the application:

* Heroku




### Configuration file "dbconnect.js"

This is an example of URI needed in order to connect to the MongoDB server.  

```js
    const uri = "mongodb+srv://Ignacio-Merello:xxx@cluster0.8wyqg.mongodb.net/xxx?retryWrites=true&w=majority";
```


### Containers

In order to access the lodged data in MongoDB i have created the "axios" connections through the different containers that will send or fetch the models from its endpoints.

Example: Importing the react ".jsx" file for appointments

```js

import axios from 'axios'; // Require axios
import './Appointments.scss'; // Import the style associated
import React, { useEffect, useState } from 'react'; //Making use of the React Functionalities

const Appointment = () => {


    const [dataAppointments, setAppointments] = useState([]);//Making us of Hooks

    useEffect(() => {

        axios.get('https://clinic-appointments-mongodb.herokuapp.com/appointments/showall')
            .then((res) => {
                console.log(res.data);
                setAppointments(res.data);

                localStorage.setItem("Appointments", JSON.stringify(res.data)); //Conversion of the data into "string"

            }).catch((err) => {
                console.log(err);
            });

    }, []);

    const selectAppointments = (appointment) => {
        let storage = JSON.parse(localStorage.getItem("Appointments"));//Converting Json to allow its access
        console.log(storage);
    }
//Here is where you code whatever you want to display in the FrontEnd of that route
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

export default Appointment //Exporting the container
```

# Building de App and creating the Routes

The main file that will englobe the whole application will need to have imported the container as well as the "browserrouter" functionality from react to display the project.

```js

import React from 'react';
import { Switch, BrowserRouter, Route, } from 'react-router-dom'
import 'antd/dist/antd.css';//Importing AntDesign to the main "App.js" file
import './App.css';
import Appointments from './containers/Appointments/Appointments'

function App() {
  return (

    <BrowserRouter>
      <Route>
        <Header/>
        <Switch>
          <Route path='/appointments' component={Appointments} exact /> 
        </Switch>
        <Footer/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
```



## Documentation

- [React documentation](https://reactjs.org/)

- [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)



## Author 

* **Ignacio Merello lloret** - [ignaciomerello](https://github.com/ignaciomerello)


