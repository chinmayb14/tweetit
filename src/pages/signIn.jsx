import { NavLink } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="flex flex-column flex-center h-full w-full">
      <h2 className="fw-black txt-m mb-m">
        <span className="primary-color">Tweet</span> It
      </h2>
      <div className="white-bg br-m p-xxl pt-l pb-l" style={{ width: "30rem" }}>
        <h3 className="txt-center mb-s txt-l">Signup</h3>
        <div className="flex flex-column">
          <label for="name" className="txt-s">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="p-xs txt-s br-s mb-s "
            style={{ border: "1px solid grey" }}
            placeholder="Tanay Pratap"
          />
        </div>
        <div className="flex flex-column">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            className="p-xs txt-s br-s mb-s "
            style={{ border: "1px solid grey" }}
            placeholder="tanaypratap"
          />
        </div>
        <div className="flex flex-column">
          <label for="email">Email Address</label>
          <input
            type="text"
            name="email"
            className="p-xs txt-s br-s mb-s "
            style={{ border: "1px solid grey" }}
            placeholder="tanay@neog.camp"
          />
        </div>
        <div className="flex flex-column">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            className="p-xs txt-s br-s flex mb-s items-center "
            style={{ border: "1px solid grey" }}
            placeholder="************"
          />
        </div>
        <div className="flex flex-column">
          <label for="password">Confirm Password</label>
          <input
            type="password"
            name="password"
            className="p-xs txt-s br-s flex items-center "
            style={{ border: "1px solid grey" }}
            placeholder="************"
          />
        </div>
        <div className="flex flex-align-center flex-space-between mt-m mb-m"></div>
        <button className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s">
          Create New Account
        </button>
        <NavLink
          to="/"
          className="txt-center w-full mt-m"
          style={{ display: "block" }}
        >
          Already have an account &gt;
        </NavLink>
      </div>
    </div>
  );
};
