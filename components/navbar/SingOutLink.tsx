"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

const SingOutLink = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logout",
      description: "You have been logged out.",
    });
  };

  return (
    <SignOutButton>
      <Link href='/' onClick={handleLogout} className='w-full text-left'>
        Logout
      </Link>
    </SignOutButton>
  );
};
export default SingOutLink;
