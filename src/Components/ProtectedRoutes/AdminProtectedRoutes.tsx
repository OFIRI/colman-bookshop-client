import React, {FC, ReactNode, useContext} from "react";
import { Navigate } from "react-router-dom";
import { SessionContextStore } from "../../contexts/SessionContext/SessionContext";

type AdminProtectedRouteProps =  {
  children?: ReactNode
}

const AdminProtectedRoute:FC<AdminProtectedRouteProps> = ({ children }) => {
  const {isAdmin} = useContext(SessionContextStore);
    if (!isAdmin) {
      return <Navigate to="/" replace />;
    }
  
    return <>{children}</>;
};

export default AdminProtectedRoute;