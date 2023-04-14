import React from 'react';
import './Users.css';
import React, { useState, useEffect, useReducer  } from 'react';
import CardComponent from './CardComponent';
import UserReducer from './Store/Reducer';


function UsersRudx() {


  const [Users, setUsers] = useState({});
  
const Commencer= async () => {
  await  fetch('https://reqres.in/api/users/1')
    .then((response) => response.json())
    .then((data) => setUsers(data.data));
}

const initstat=Users;
 
const [state, dispatch] = useReducer(UserReducer,Users);


 

  console.log(state)
 
  return (
    <div className="cont">
      <h1 className="h1">Liste des utilisateurs</h1>
      <div>

      <button onClick={() => Commencer()   } >Commencer</button>
    <button onClick={() => dispatch({ type: 'Modif' })}>Modif</button>
      <button onClick={() => dispatch({ type: 'Supr' })}>Supr</button>
         </div>


         <CardComponent
              Name={Users.first_name + ' ' + Users.last_name}
              id={Users.id}
              Email={Users.email}
              img={Users.avatar}
            />




    
    </div>
  );
}

export default UsersRudx;