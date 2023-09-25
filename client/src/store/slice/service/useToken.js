import {useState} from 'react';

export default function useToken() {
  const getToken = () => {
    return localStorage.getItem('token');
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    if (userToken) {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    } else {
        localStorage.removeItem('token');
        setToken(null);
    }

  };

  return {
    setToken: saveToken,
    token
  }
}