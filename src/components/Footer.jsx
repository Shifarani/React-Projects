function Footer() {
  return (
    <footer
      style={{
        background: "black",
        color: "white",
        textAlign: "center",
        padding: window.innerWidth < 480 ? "15px" : "25px",
        marginTop: "50px",
      }}
    >
      <h3 style={{ margin: "5px 0", fontSize: window.innerWidth < 480 ? "16px" : "20px" }}>
        ShopEase
      </h3>

      <p style={{ margin: 0, fontSize: window.innerWidth < 480 ? "12px" : "14px" }}>
        © 2026 All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;