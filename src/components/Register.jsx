import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    dispatch({
      type: "REGISTER",
      payload: {
        id: new Date().getTime(),
        name,
        username,
        password,
      },
    });
  };

  return (
    <form className="card p-3 w-25 mx-auto">
    <h1 className="mx-auto text-primary">Register</h1>
      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <input
            className="form-control"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input
            className="form-control"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
      </div>

    <div className="form-outline mb-4">
    <input
    className="form-control"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="form-outline mb-4">
    <input
    className="form-control"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
      <input className="btn btn-primary btn-block" type="button" value="Register" onClick={register} />
    </form>
  );
};

export default Register;
