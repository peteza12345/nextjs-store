import { Button } from "../ui/button";

const AddToCart = ({ productId }: { productId: string }) => {
  return (
    <Button className='mt-8 capitalize' size='lg'>
      add to cart
    </Button>
  );
};
export default AddToCart;
