import banner from "../assetss/9th.png";

function Hero() {
  return (
    <section
      style={{
        height: "80vh",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: "60px",
      }}
    >
      <div
        style={{
          color: "white",
          maxWidth: "500px",
          background:
            "linear-gradient(135deg, rgba(255,209,232,0.25), rgba(160,231,255,0.25))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          padding: "30px",
          borderRadius: "20px",
          animation: "floatBox 3s ease-in-out infinite",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            marginBottom: "15px",
            textShadow: "0 0 15px rgba(255,255,255,0.8)",
          }}
        >
          Mega Sale 2026 🔥
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.7",
            marginBottom: "20px",
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          Up to 70% Off on Fashion, Electronics & Accessories
        </p>

        <button
          style={{
            padding: "14px 32px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            color: "white",
            background:
              "linear-gradient(90deg, #ff4d6d, #6c88fa)",
            boxShadow: "0 5px 15px rgba(74,108,247,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.08)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        >
          Shop Now ✨        
          </button>
      </div>

      <style>
        {`
          @keyframes floatBox {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;