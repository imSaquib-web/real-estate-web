import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";

const Navbar = () => {
  const { token, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Properties</Link>

      {!token ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          {user?.role !== "visitor" && <Link to="/add">Add Property</Link>}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
