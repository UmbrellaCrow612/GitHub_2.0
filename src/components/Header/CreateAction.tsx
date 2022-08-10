import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineExpandMore } from 'react-icons/md'

interface CreateActionProps {}

export const CreateAction: React.FC<CreateActionProps> = () => {
  return (
    <button className="md:flex items-center group p-1 hidden">
      <AiOutlinePlus className="text-white text-xl" />
      <MdOutlineExpandMore className="text-white text-xl" />
    </button>
  )
}
