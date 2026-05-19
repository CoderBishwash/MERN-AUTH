import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchProducts = async () => {
    const url = "http://localhost:8080/products";
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const response = await fetch(url, headers);
    const result = await response.json();
    setProducts(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-col items-center mt-100">
      <h1>{loggedInUser}</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-300 text-white rounded-2xl"
      >
        Logout
      </button>

      <div>
        {
          products.map((product)=> 
            <ul key={product.id}>
              <li className="list-disc">{product.name} : Rs. {product.price}</li>
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default Home;
