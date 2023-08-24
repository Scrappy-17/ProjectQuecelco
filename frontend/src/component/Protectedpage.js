import { Navigate, Outlet } from "react-router-dom";
// import Login from "../pages/Login";

const useAuth =() => {
    const user = {isloggIn: false}
    return user && user.isloggIn;
}


export const Protectedpage = () => {
    const isAuth =  useAuth();
  return isAuth ? <Outlet /> : <Navigate to = "/" />;
  
}
