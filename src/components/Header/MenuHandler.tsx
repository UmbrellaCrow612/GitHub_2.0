import { HiMenu } from 'react-icons/hi'
import { useRecoilState } from 'recoil'
import { mobileDrawerState } from '../../../atoms/mobileDrawerState'

interface MenuHandlerProps {}

export const MenuHandler: React.FC<MenuHandlerProps> = () => {
  const [open, setOpen] = useRecoilState(mobileDrawerState)
  return (
    <button role="button" onClick={() => setOpen(!open)} className="md:hidden">
      <HiMenu className="text-gray-100 text-3xl" />
    </button>
  )
}
