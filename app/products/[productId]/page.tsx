import React from "react";

const SingleProductPage = ({ params }: { params: { productId: string } }) => {
  // params is an object with a prodid of string
  return <div>Single Product Page {params.productId}</div>;
};

export default SingleProductPage;
