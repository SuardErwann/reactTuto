import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [user, setUser] = useState('Default user');


useEffect(()=>{
  fetch(url)
  .then((res) => {
    if(res.status <= 299 && res.status >= 200) {
      return res.json();
    } else {
      setIsLoading(false);
      setIsError(true);
      throw new Error(res.statusText);
    }
    
  })
  .then((user)=>{
    console.log(user);
    const {login} = user;
    setUser(login);
    setIsLoading(false);
    return(
      <div className='user'>
        <img src={user.avatar_url} />
        <h1>{user.login}</h1>
      </div>
    );
  })
  .catch(err => console.log(err));
},[]);

  if(isLoading) {
    return (
    <div>
      <h1>Loading...</h1>
    </div>);
  }
  if(isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>);
  }
  return (
    <div>
      <h1>
        {user}
      </h1>
    </div>
  );
};

export default MultipleReturns;
