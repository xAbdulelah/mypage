import { Button } from "@/components/ui/button";
import Link from "next/link";
import {   EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle></ModeToggle>
        <Button asChild variant="ghost" aria-label="View cart">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild aria-label="Sign in">
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical/>

          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
<SheetTitle>Menu</SheetTitle>
<ModeToggle></ModeToggle>
<Button asChild variant='ghost' aria-label="View cart">
  <Link href='/cart'>
   <ShoppingCart></ShoppingCart> Cart</Link>
</Button>
<Button asChild variant='ghost' aria-label="Sign in">
  <Link href='/sign-in'>
   <UserIcon/>Sign in </Link>
</Button>
<SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
