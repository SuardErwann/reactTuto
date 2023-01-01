import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';


const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users);
  }
  useEffect(() => {
    getUsers()
  },[]);
  return (
    <>
      <h3>Github users</h3>
      <ul className='users'>
      {
        users.map((user) => {
          const {id, login, avatar_url} = user;
          return (
            <li key={id}>
              <img src={avatar_url}/>
              <h4>{login}</h4>
            </li>
          );
        })
      }
      </ul>
    </>
  );
};

export default UseEffectFetchData;
