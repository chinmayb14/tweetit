import { useContext, useReducer, createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const authContext = createContext();

const loginReducer = (state, action) => {
  switch (action.type) {
    case "user-name":
      return { ...state, username: action.payload };
    case "user-password":
      return { ...state, password: action.payload };
    case "update-user":
      return { ...state, user: { ...action.payload } };
    default:
      return state;
  }
};

const signinReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const AuthProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(loginReducer, {
    username: "",
    password: "",
    user: {},
  });

  const [signinState, signinDispatch] = useReducer(signinReducer, {
    username: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      const result = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: loginState.username,
          password: loginState.password,
        }),
      });

      if (result.status === 200) {
        const { foundUser, encodedToken } = await result.json();
        toast.success(
          `Welcome, ${foundUser.firstName + "" + foundUser.lastName}!`,
          {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
        loginDispatch({ type: "update-user", payload: foundUser });
        localStorage.setItem("token", encodedToken);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <authContext.Provider value={{ loginState, loginDispatch, loginUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
