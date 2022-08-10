import Image from 'next/image'
import { MdOutlineExpandMore } from 'react-icons/md'
interface UserProfileProps {}

export const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <button className="items-center p-1 hidden md:flex">
      <Image src="/images/logo.png" alt="username" width={25} height={25} />
      <MdOutlineExpandMore className="text-white text-xl" />
    </button>
  )
}
