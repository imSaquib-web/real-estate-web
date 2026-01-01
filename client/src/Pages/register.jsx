import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "visitor",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/users/register", form);
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1 className="auth-form-title">Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Phone number (with country code)"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
            <option value="visitor">Visitor</option>
            <option value="owner">Property Owner</option>
          </select>

          <button type="submit">Register</button>
        </form>
        <p
          style={{
            textAlign: "center",
            marginTop: "16px",
            color: "var(--text-secondary)",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "var(--primary-color)",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
