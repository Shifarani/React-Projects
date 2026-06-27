import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// 🛍 Products Data
const productsData = [
  {
    id: 1,
    name: "Red Sneakers",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    name: "Women Hoodie",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500",
  },
  {
    id: 3,
    name: "Stylish Purse",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
  },
  {
    id: 4,
    name: "Casual Watch",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
  },
  {
    id: 5,
    name: "Women Jacket",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
  },
  {
    id: 6,
    name: "Formal Shirt",
    price: 1399,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
  },
  {
    id: 7,
    name: "Denim Jeans",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
  },
  {
    id: 8,
    name: "Women Purse",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500",
  },
  {
    id: 9,
    name: "Running Shoes",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500",
  },
  {
    id: 10,
    name: "Stylish Dress",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
  },
  {
    id: 11,
    name: "Moisturizer",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
  },
  {
    id: 12,
    name: "Hydrating cream",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=500",
  },
  {
    id: 13,
    name: "Dove cream",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500",
  },
  {
    id: 14,
    name: "Curology",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500",
  },
  {
    id: 17,
    name: "CLINIQUE Lipstick",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500",
  },
  {
    id: 19,
    name: "Curology Combo",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500",
  },
  {
    id: 20,
    name: "Makeup Kit",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
  },
  {
    id: 22,
    name: "Floral Summer Dress",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
  },
  {
    id: 23,
    name: "Cherry Red Dress",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
  },
  {
    id: 24,
    name: "Cute Wine Party Dress",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
  },
];

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffd1e8, #a0e7ff)",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          color: "#ff4d6d",
          marginBottom: "30px",
          fontSize: "32px",
        }}
      >
        🛍️ Our Products
      </h1>

      {/* PRODUCTS GRID */}
      <div className="product-grid">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>

      {/* RESPONSIVE CSS */}
      <style>
        {`
          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
          }

          .product-card {
            background: white;
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: 0.3s;
          }

          .product-card img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 10px;
          }

          .product-card h3 {
            color: #4a6cf7;
          }

          .product-card p {
            color: #ff4d6d;
            font-weight: bold;
            font-size: 18px;
          }

          .product-card button {
            padding: 10px 15px;
            background: linear-gradient(90deg, #4a6cf7, #00c6ff);
            border: none;
            color: white;
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
          }

          /* 📱 MOBILE RESPONSIVE */
          @media (max-width: 768px) {

            h1 {
              font-size: 24px !important;
            }

            .product-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 12px !important;
            }

            .product-card img {
              height: 160px !important;
            }

            .product-card button {
              width: 100%;
              padding: 8px;
              font-size: 14px;
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

export default Products;