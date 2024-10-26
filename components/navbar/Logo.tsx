import Link from "next/link";
import { Button } from "../ui/button";
import { VscCode } from "react-icons/vsc";

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <VscCode className='size-6' />
      </Link>
    </Button>
  );
};
export default Logo;
