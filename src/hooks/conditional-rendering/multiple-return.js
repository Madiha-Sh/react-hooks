import React, { useEffect, useState } from 'react';

const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response => {
        if(response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw Error(response.statusText)
        }
      })
      .then(user => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, [])

  if(isLoading) {
    return <h1>loading...</h1>
  }
  if(isError) {
    return <h1>Error...</h1>
  }
  return (
    <h2>{user}</h2>
  )
}
 
export default MultipleReturn;