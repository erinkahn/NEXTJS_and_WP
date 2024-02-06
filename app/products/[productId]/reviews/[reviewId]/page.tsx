import { notFound } from "next/navigation";
import React from "react";

const SingleReviewPage = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    // if you visit /products/#/reviews/1001 or over 1000, it will show the not found page inside [reviewId]
    notFound();
  }
  return (
    <div>
      Single Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default SingleReviewPage;
