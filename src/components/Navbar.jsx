import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "linear-gradient(90deg, #f8a4cb, #ffd1e8)",
      color: "#0e0d0d",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },

    logo: {
      fontSize: "28px",
      fontWeight: "900",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "Poppins, Arial, sans-serif",
      letterSpacing: "1px",
      background: "linear-gradient(45deg, #4a6cf7, #ff4d6d)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    links: {
      display: "flex",
      listStyle: "none",
      gap: "28px",
      margin: 0,
      padding: 0,
      fontWeight: "500",
    },

    linkItem: {
      cursor: "pointer",
      fontSize: "16px",
      transition: "0.3s",
      textDecoration: "none",
      color: "inherit",
    },

    cart: {
      background: "#4a6cf7",
      padding: "8px 14px",
      borderRadius: "25px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      cursor: "pointer",
      color: "white",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    },

    cartCount: {
      background: "#fff",
      color: "#ff4d6d",
      padding: "2px 8px",
      borderRadius: "50%",
      fontSize: "14px",
      fontWeight: "bold",
    },
  };

  return (
    <nav style={styles.navbar}>
      
      {/* Logo → Home */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div style={styles.logo}>🛍️ ShopEase</div>
      </Link>

      {/* Links */}
      <ul style={styles.links}>
        <li>
          <Link to="/" style={styles.linkItem}>Home</Link>
        </li>

        <li>
          <Link to="/products" style={styles.linkItem}>Products</Link>
        </li>

        <li>
          <Link to="/categories" style={styles.linkItem}>Categories</Link>
        </li>

        <li>
          <Link to="/about" style={styles.linkItem}>About</Link>
        </li>

        <li>
          <Link to="/contact" style={styles.linkItem}>Contact</Link>
        </li>
      </ul>

      {/* Cart */}
      <Link
        to="/cart"
        style={{
          textDecoration: "none",
        }}
      >
        <div style={styles.cart}>
          🛒 Cart
          <span style={styles.cartCount}>{cartItems.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;