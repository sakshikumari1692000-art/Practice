const PrivateRoute = ({ children, role }) => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
  
    if (!token) return <Navigate to="/" />;
  
    if (role && role !== userRole) {
      return <p>Access Denied</p>;
    }
  
    return children;
  };

  export default PrivateRoute;