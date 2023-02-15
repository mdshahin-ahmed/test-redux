import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>Inside home page</div>;
};

export default Home;
