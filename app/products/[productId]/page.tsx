import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// dynamic metadata
// title will change to Product #
// you can also use async await here since it may take time to get productid
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

const SingleProductPage = ({ params }: Props) => {
  // params is an object with a prodid of string
  return <div>Single Product Page {params.productId}</div>;
};

export default SingleProductPage;
