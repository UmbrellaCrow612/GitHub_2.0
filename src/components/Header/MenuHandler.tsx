import { HiMenu } from 'react-icons/hi'

interface MenuHandlerProps {}

export const MenuHandler: React.FC<MenuHandlerProps> = () => {
  return (
    <button role="button">
      <HiMenu className="text-gray-100 text-3xl" />
    </button>
  )
}
