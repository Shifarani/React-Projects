import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import CategorySection from "../components/CategorySection";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <>
      <Hero />
      <CategorySection/>
      <SearchBar/>

      <h2
        style={{
          textAlign: "center",
          margin: "40px 0 20px",
        }}
      >
        Featured Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default Home;