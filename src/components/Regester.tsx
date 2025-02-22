import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../main";
import { registeruser } from "../features/autho";

const Register: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleRegister = () => {
    dispatch(registeruser(user));
  };

  return (
    <>
      
        <div>
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button onClick={handleRegister}>Register</button>
          {auth.registerstatus === "success" && (
            <p className="text-green-500">Registration successful</p>
          )}
          {auth.registerstatus === "failed" && (
            <p className="text-red-500">{auth.registererror}</p>
          )}
        </div>
    
    </>
  );
};

export default Register;
