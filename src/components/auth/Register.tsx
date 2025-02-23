import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../main";
import { registeruser } from "../../features/autho";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleRegister = () => {
    dispatch(registeruser(user));
  };
  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  return (
    <div className="container mx-auto p-4 border-red-500 border-5">
      <h1 className="text-2xl font-bold text-center mt-20">SIGN IN</h1>
      <div className="flex flex-col items-center mt-10">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-gray-200 p-2 rounded mb-4"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-200 p-2 rounded mb-4"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-200 p-2 rounded mb-4"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={handleRegister}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mt-4"
        >
          Register
        </button>
        {auth.registerstatus === "success" && (
          <p className="text-green-500 mt-4">Registration successful</p>
        )}
        {auth.registerstatus === "failed" && (
          <p className="text-red-500 mt-4">{auth.registererror}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
