import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Sorry, the page you are looking for does not exist. You can always go back to the{" "}
        <Link className="link" to="/">homepage</Link>.
      </p>
    </div>
  );
}

export default PageNotFound;
