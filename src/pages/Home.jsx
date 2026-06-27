import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import CategorySection from "../components/CategorySection";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <SearchBar />

      <h2
        style={{
          textAlign: "center",
          margin: "40px 0 20px",
        }}
      >
        Featured Products
      </h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* RESPONSIVE CSS */}
      <style>
        {`
          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          /* 📱 MOBILE RESPONSIVE */
          @media (max-width: 768px) {

            h2 {
              font-size: 20px !important;
              margin: 25px 0 15px !important;
            }

            .product-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 12px !important;
              padding: 10px !important;
            }
          }

          @media (max-width: 480px) {
            .product-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;