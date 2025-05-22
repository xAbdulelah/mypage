"use client";

import { Cart } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTransition , useState } from "react";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { ArrowRight, Loader, Minus, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
 const [loadingButton, setLoadingButton] = useState("");

  return (
    <>
      <h1 className="py-4 h2-bold">Shopping Cart</h1>
      {!cart || cart.items.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.items.map((item) => (
                  <TableRow key={item.slug}>
                    <TableCell>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                        <span className="px-2">{item.name}</span>
                      </Link>
                    </TableCell>
                    <TableCell className="flex-center gap-2">
<Button
  disabled={isPending}
  variant="outline"
  type="button"
  onClick={() => {
    setLoadingButton(`remove${item.name}`);
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);
      setLoadingButton("");
      if (!res.success) {
        toast.error(res.message);
      }
    });
  }}
>
  {isPending &&
  loadingButton === `remove${item.name}`  ? (
    <Loader className="w-4 h-4 animate-spin" />
  ) : (
    <Minus className="w-4 h-4" />
  )}
</Button>

<span>{item.qty}</span>

<Button
  disabled={isPending}
  variant="outline"
  type="button"
  onClick={() => {
    setLoadingButton( `add${item.name}` );
    startTransition(async () => {
      const res = await addItemToCart(item);
      setLoadingButton('');
      if (!res.success) {
        toast.error(res.message);
      }
    });
  }}
>
  {isPending &&
  loadingButton === `add${item.name}` ? (
    <Loader className="w-4 h-4 animate-spin" />
  ) : (
    <Plus className="w-4 h-4" />
  )}
</Button>
                    </TableCell>
                    <TableCell className="text-right">
                      SAR {item.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Card>
            <CardContent className="p-4 gap-4">
              <div className="pb-3 text-xl">
                subtotal ({cart.items.reduce((a, c) => a + c.qty, 0)}):
                <span className="fony-bold">
                  {formatCurrency(cart.itemsPrice)}
                </span>
              </div>

              <Button
                className="w-full"
                disabled={isPending}
                onClick={() =>
                  startTransition(() => router.push("/shipping-address"))
                }
              >
                {isPending ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}{" "}
                proceed to check out
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CartTable;
