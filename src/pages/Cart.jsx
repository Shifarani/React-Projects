import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart, getTotal } =
    useContext(CartContext);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffd1e8, #a0e7ff)",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "bold",
          color: "#ff4d6d",
          marginBottom: "20px",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        🛒 Your Sweet Cart
      </h2>

      {cartItems.length === 0 ? (
        <h3 style={{ textAlign: "center", color: "#333" }}>
          Cart is Empty 😢
        </h3>
      ) : (
        <>
          {/* CART ITEMS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                  borderRadius: "15px",
                  background: "white",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  transform: "scale(1)",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {/* ITEM INFO */}
                <div>
                  <h4 style={{ margin: 0, color: "#4a6cf7" }}>
                    {item.name}
                  </h4>
                  <p style={{ margin: "5px 0", color: "#ff4d6d" }}>
                    ₹{item.price}
                  </p>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    background: "linear-gradient(90deg, #ff4d6d, #ff758f)",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* TOTAL BOX */}
          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              borderRadius: "15px",
              background: "white",
              textAlign: "center",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#4a6cf7" }}>
              Total: ₹{getTotal()}
            </h2>

            <button
              onClick={clearCart}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                background: "linear-gradient(90deg, #4a6cf7, #00c6ff)",
                color: "white",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Clear Cart 💙
            </button>
          </div>
        </>
      )}

      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default Cart;