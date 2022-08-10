import Link from 'next/link'

interface MenuOptionProps {
  title: string
  href: string
  isBorderTop?: boolean
}

export const MenuOption: React.FC<MenuOptionProps> = ({
  title,
  href,
  isBorderTop,
}) => {
  return (
    <Link href={`/${href}`}>
      <a
        className={`flex items-center w-full h-8 px-3 text-sm tracking-wide cursor-pointer hover:bg-blue-600 hover:text-white ${
          isBorderTop ? 'border-t-[0.2em]' : ''
        }`}
      >
        {title}
      </a>
    </Link>
  )
}
