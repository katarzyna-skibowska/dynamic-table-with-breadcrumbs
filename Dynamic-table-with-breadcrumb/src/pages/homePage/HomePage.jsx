import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-box">
      <h1>Welcome to The Books World!</h1>
      <button className="button-redirect" onClick={() => navigate("/books")}>
        Check out our books library
      </button>
    </div>
  );
};

export default HomePage;
