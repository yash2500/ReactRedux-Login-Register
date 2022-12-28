import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)

  const login = () => {
    const payload = users.find(user => user.username === username && user.password === password)
    if(payload)
    {
        dispatch({
            type: 'LOGIN',
            payload
        })
    } else {
        alert('Wrong username or password')
    }
  }

  return (
    <form className="card p-3 w-25 mx-auto">
    <h1 className="mx-auto text-primary">Login</h1>
    <div className="mb-3">
      <input
        className="form-control" 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div className="mb-3">
      <input
        className="form-control" 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <input className="btn btn-primary" type="button" value="Login" onClick={login} />
      
    </form>
  );
};

export default Login;
