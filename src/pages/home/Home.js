import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import "./Home.scss";
import Categories from "../collection/Collection";
import Category from "../../components/category/Category";
import Product from "../../components/products/Product";
import axios from "axios";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";

function Home() {
  const categories = useSelector((state) => state.categoryReducer.categories);

  const [topProducts, setTopProducts] = useState(null);

  async function fetchData() {
    const topProductsResponse = await axiosClient.get(
      "/products?filters[istopPick][$eq]=true&populate=image"
    );

    setTopProducts(topProductsResponse.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop by Categories</h2>
          <p className="subheading">Read from your choice of Category</p>
        </div>
        <div className="content">
          {categories?.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">Read All Important Topics</p>
        </div>
        <div className="content">
          {topProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
