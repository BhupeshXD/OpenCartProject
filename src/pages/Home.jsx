import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = ({isLoggedIn}) => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log("Error occurred:", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
    <h1 className="text-white text-3xl pl-[120px] pt-10">Products</h1>
      {loading ? (
        // Centering the loading spinner
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl pr-5 pb-8 mx-auto space-y-10 space-x-7 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        // Centering the "No Data Found" message
        <div className="flex justify-center items-center h-screen">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
