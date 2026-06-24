function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #ffd1e8, #a0e7ff)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "38px",
          color: "#ff4d6d",
          marginBottom: "30px",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        ℹ️ About ShopEase
      </h1>

      {/* Main Card */}
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#ffffff",
          padding: "35px",
          borderRadius: "25px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
          textAlign: "center",
          transition: "all 0.4s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.boxShadow =
            "0 15px 35px rgba(0,0,0,0.18)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 8px 25px rgba(0,0,0,0.12)";
        }}
      >
        <h2
          style={{
            color: "#4a6cf7",
            marginBottom: "15px",
          }}
        >
          🛍️ Welcome to ShopEase
        </h2>

        <p
          style={{
            color: "#555",
            lineHeight: "1.9",
            fontSize: "17px",
          }}
        >
         "ShopEase is a modern and stylish e-commerce platform 
         where you can easily explore fashion, shoes, bags, watches, and electronics products."
        </p>

        <p
          style={{
            color: "#555",
            lineHeight: "1.9",
            fontSize: "17px",
          }}
        >
          "Our mission is to deliver a seamless, fast, and enjoyable online shopping experience. We enhance customer satisfaction by offering high-quality products combined with an attractive and user-friendly design."
        </p>

        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              background: "#ffe4ef",
              padding: "20px",
              borderRadius: "15px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(255,77,109,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform =
                "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ color: "#ff4d6d" }}>🚀 Fast Delivery</h3>
            <p style={{ color: "#555" }}>
              Quick and reliable product delivery.
            </p>
          </div>

          <div
            style={{
              background: "#e3f5ff",
              padding: "20px",
              borderRadius: "15px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(74,108,247,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform =
                "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ color: "#4a6cf7" }}>💙 Modern Design</h3>
            <p style={{ color: "#555" }}>
              Clean and user-friendly shopping interface.
            </p>
          </div>

          <div
            style={{
              background: "#ffe4ef",
              padding: "20px",
              borderRadius: "15px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(255,77,109,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform =
                "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ color: "#ff4d6d" }}>🛍️ Easy Shopping</h3>
            <p style={{ color: "#555" }}>
              Browse products and shop with ease.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          <div
            style={{
              background: "#4a6cf7",
              color: "white",
              padding: "15px 25px",
              borderRadius: "15px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.12)";
              e.currentTarget.style.boxShadow =
                "0 12px 25px rgba(74,108,247,0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h2>500+</h2>
            <p>Products</p>
          </div>

          <div
            style={{
              background: "#ff4d6d",
              color: "white",
              padding: "15px 25px",
              borderRadius: "15px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.12)";
              e.currentTarget.style.boxShadow =
                "0 12px 25px rgba(255,77,109,0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h2>1000+</h2>
            <p>Happy Customers</p>
          </div>

          <div
            style={{
              background: "#00c6ff",
              color: "white",
              padding: "15px 25px",
              borderRadius: "15px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.12)";
              e.currentTarget.style.boxShadow =
                "0 12px 25px rgba(0,198,255,0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;