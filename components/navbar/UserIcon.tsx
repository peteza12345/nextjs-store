import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt='profile'
        width={24}
        height={24}
        className='rounded-full size-6 object-cover'
      />
    );
  }

  return <LuUser2 className='size-6 bg-primary rounded-full text-white' />;
};
export default UserIcon;
