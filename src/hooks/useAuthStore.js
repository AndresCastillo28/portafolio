import { useDispatch, useSelector } from "react-redux";
import { portafolioApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";
import { showSucessToast } from "../helpers";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ username, password }) => {
    console.log(username, password);
    dispatch(onChecking());
    try {
      const { data } = await portafolioApi.post("/auth/login", {
        username,
        password,
      });
      console.log(data)
      showSucessToast("Login has been succesfully");
      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: "Andres"}));
    } catch (error) {
      console.error(error);
      dispatch(onLogout("Incorrect credentials"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    console.log("In check token");
    if (!token) return dispatch(onLogout());
    try {
      const { data } = await portafolioApi.get("/auth/re-new");
      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: "Andres" }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    checkAuthToken,
    startLogin,
    startLogout,
  };
};
