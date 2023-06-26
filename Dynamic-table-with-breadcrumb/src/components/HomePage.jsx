import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to The Books World!</h2>
      <button onClick={() => navigate("/books")}></button>
    </div>
  );
};

export default HomePage;
