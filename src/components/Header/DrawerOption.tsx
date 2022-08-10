import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
interface DrawerOptionProps {
  title: string
  href: string
  isLogOut?: boolean
}

export const DrawerOption: React.FC<DrawerOptionProps> = ({
  title,
  href,
  isLogOut,
}) => {
  return (
    <Link href={`/${href}`}>
      <a
        className={`h-9 w-full border-t-[0.5px]  border-[#44494E] flex items-center group`}
      >
        {isLogOut ? (
          <FiLogOut className="text-white text-xl mr-1 group-hover:text-gray-400" />
        ) : (
          <></>
        )}
        <h6 className="text-sm text-[#FFFFFF] font-semibold group-hover:text-gray-400">
          {title}
        </h6>
      </a>
    </Link>
  )
}
