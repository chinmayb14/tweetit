import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/authServices";

export const Login = () => {
  const { loginDispatch, loginUser } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="flex flex-column flex-center h-full w-full">
      <h2 className="fw-black txt-xl mb-m">
        <span className="primary-color">Tweet</span> It
      </h2>
      <div
        className="white-bg br-m p-xxl pt-xl pb-xl"
        style={{ width: "30rem" }}
      >
        <h3 className="txt-center mb-m txt-l">Login</h3>
        <div className="flex flex-column">
          <label for="username">username</label>
          <input
            type="text"
            name="username"
            className="p-xs txt-s  br-s mb-s "
            style={{ border: "1px solid grey" }}
            placeholder="username"
            onChange={(e) =>
              loginDispatch({ type: "user-name", payload: e.target.value })
            }
          />
        </div>
        <div className="flex flex-column">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            className="p-xs txt-s  br-s flex items-center "
            style={{ border: "1px solid grey" }}
            placeholder="********"
            onChange={(e) =>
              loginDispatch({ type: "user-password", payload: e.target.value })
            }
          />
        </div>
        <div className="flex flex-align-center flex-space-between mt-m mb-m"></div>
        <button
          className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
          onClick={() => {
            loginUser();
            navigate("/home");
          }}
        >
          Login
        </button>
        <NavLink
          className="txt-center w-full mt-m"
          to="/signin"
          style={{ display: "block" }}
        >
          Create New Account &gt;
        </NavLink>
      </div>
    </div>
  );
};
