function Contact() {
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
        📞 Contact Us
      </h1>

      {/* Contact Card */}
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#fff",
          borderRadius: "25px",
          padding: "35px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#4a6cf7",
            marginBottom: "15px",
          }}
        >
          We'd Love to Hear From You 💌
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          If you have any questions, suggestions, or feedback, please don't hesitate to contact us. Our team is always available and ready to assist you.
        </p>

        {/* Contact Info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              background: "#ffe4ef",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#ff4d6d" }}>📧 Email</h3>
            <p style={{ color: "#555" }}>support@shopease.com</p>
          </div>

          <div
            style={{
              background: "#e3f5ff",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#4a6cf7" }}>📱 Phone</h3>
            <p style={{ color: "#555" }}>+91 98765 43210</p>
          </div>

          <div
            style={{
              background: "#ffe4ef",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#ff4d6d" }}>📍 Address</h3>
            <p style={{ color: "#555" }}>
              ShopEase Headquarters,
              <br />
              New Delhi, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "2px solid #a0e7ff",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "2px solid #ffd1e8",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "2px solid #a0e7ff",
              outline: "none",
              resize: "none",
              fontSize: "16px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #ff4d6d, #4a6cf7)",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Send Message 🚀
          </button>
        </form>
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

export default Contact;