"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus, Minus,Loader } from "lucide-react";
import { Cart, CartItem } from "@/types";
import AToast from "@/components/acustom/a-custom-toast";
import { toast } from "sonner";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { useTransition } from "react";


const AddToCart = ({ cart, item }: {cart?: Cart, item: CartItem }) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    startTransition(async ()=> {


    const res = await addItemToCart(item);
    if (!res.success) {
     toast.error(res.message)
      
      return;
    }
    // handle success
   AToast(res.message,"Cart",()=>router.push('/cart')  );


    })


   
    
  };

const handleRemoveCart = async () =>{
   startTransition(async ()=> {
  const res = await removeItemFromCart(item.productId);
  AToast(res.message,  );
   })
}

  // check if item is in cart
   const existItem = cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (<div> 
    <Button type="button" variant='outline' onClick={ handleRemoveCart} > 
      
      {isPending ? <Loader className="w-4 h-4 animate-spin" /> :  <Minus className="h-4 w-4"/>}
        </Button>
        <span className="px-2">{existItem.qty}</span>
        <Button type="button" variant='outline' onClick={ handleAddToCart} > 
     {isPending ? <Loader className="w-4 h-4 animate-spin" /> :  <Plus className="h-4 w-4"/>}
        </Button>
  </div>) : (
    <Button className="w-full " type="button" onClick={handleAddToCart}>
      {isPending ? <Loader className="w-4 h-4 animate-spin" /> :  <Plus className="h-4 w-4"/>} Add to Cart
    </Button>
  );
};
export default AddToCart;
