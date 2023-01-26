import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const param = useParams();
  return (
    <div>
      About Detailed
      <p>{param.id}</p>
      <p>
        <Link to=".." relative="path">
          back
        </Link>
      </p>
    </div>
  );
}

export default ProductDetail;
