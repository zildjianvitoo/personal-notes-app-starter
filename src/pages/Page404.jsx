import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  const errorPageStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "60vh",
  };

  const spanStyle = {
    color: "#f39c12",
    fontSize: "1.25rem",
    fontWeight: "500"
  };

  return (
    <div style={errorPageStyle}>
      <h1>Page yang anda cari TIDAK ADA</h1>
      <p style={{ marginTop: "2rem" }}>
        Silahkan Kembali ke{" "}
        <Link to="/">
          <span style={spanStyle}>HOME PAGE</span>
        </Link>
      </p>
    </div>
  );
};

export default Page404;
