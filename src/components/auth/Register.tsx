import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../main";
import { registerUser } from "../../features/autho";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
    console.log("Auth state:", auth._id);
  }, [auth._id, navigate]);

  useEffect(() => {
    if (auth.registerStatus === "failed") {
      console.error("Registration failed:", auth.registerError);
    }
  }, [auth.registerStatus, auth.registerError]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(user);
    dispatch(registerUser(user));
  };

  return (
    <div className="container mx-auto p-4 border-red-500 border-5">
      <h1 className="text-2xl font-bold text-center mt-20">SIGN IN</h1>
      <div className="flex flex-col items-center mt-10">
        <form onSubmit={handleSubmit}>
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
            type="submit"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mt-4"
          >
            Register
          </button>
        </form>
        {auth.registerStatus === "success" && (
          <p className="text-green-500 mt-4">Registration successful</p>
        )}
        {auth.registerStatus === "failed" && (
          <p className="text-red-500 mt-4">{auth.registerError}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
