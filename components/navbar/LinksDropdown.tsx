import { LuAlignLeft } from "react-icons/lu";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { NAV_LINKS } from "@/utils/links";
import Link from "next/link";
import UserIcon from "./UserIcon";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import SingOutLink from "./SingOutLink";

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          <LuAlignLeft className='size-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
        {/* SignOut */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button type='button' className='w-full text-left'>
                Login
              </button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button type='button' className='w-full text-left'>
                Register
              </button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* SignIn */}
        <SignedIn>
          {NAV_LINKS.map((link) => (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className='capitalize w-full'>
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <SingOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
