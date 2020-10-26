import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './Users.scss';


const Users = () => {
    const [dataUsers, setUsers] = useState([]);

    useEffect(() => {
        
        axios.get("https://clinic-appointments-mongodb.herokuapp.com/users/showall")
        .then( (res) => {
            console.log(res.data);
            setUsers(res.data);

            localStorage.setItem("Users", JSON.stringify(res.data));
			
		}).catch( (err) => {
			console.log( err );
        });

    },[]);

//     const localizaConcretamente = (user) => {
//         //console.log(appointment.title);
//         let storage = JSON.parse(localStorage.getItem("Users"));
//         console.log(storage);
//    } 

    return (
        <div className="usersContainer">
        <p>· THESE ARE ALL THE USERS REGISTERED ·</p>
            {dataUsers.map(user => <div className="userProfiles" key={user._id}>{user.username}<br></br>{user.email}</div>)}
        </div>
    )
}

export default Users
