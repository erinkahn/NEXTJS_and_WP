import React from "react";

const SingleReviewPage = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      Single Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default SingleReviewPage;
