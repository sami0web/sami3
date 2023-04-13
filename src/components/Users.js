import React from 'react';
import './Users.css';
import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';

function Users() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users/')
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div className="cont">
      <h1 className="h1">Liste des utilisateurs</h1>

      <div className="cartes">
        {Users.map((user, index) => (
          <div key={Users.id}>
            <CardComponent
              Name={user.first_name + ' ' + user.last_name}
              id={user.id}
              Email={user.email}
              img={user.avatar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
