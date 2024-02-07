"use client";
import { useRouter } from "next/navigation"; // go back to a page after clicking button

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing order");
    //  router.back(); // goes to the last page in history
    //  router.replace() // replace the history
    //  router.forward() // goes to the next page in history
    router.push("/"); // goes to homepage after you click the button
  };

  return (
    <>
      <div>OrderProduct</div>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default OrderProduct;
