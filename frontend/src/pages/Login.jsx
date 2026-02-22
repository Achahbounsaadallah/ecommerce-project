import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Utilisateur fake (temporaire)
  const user = {
    username: "hamza",
    email: "hamza@example.com",
    password: "password123",
    roles: ["admin"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === user.email && password === user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/"); // vers Home
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Connexion</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Se connecter</button>

      </form>
    </div>
  );
}

export default Login;
