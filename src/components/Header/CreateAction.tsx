import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineExpandMore } from 'react-icons/md'
import { MenuOption } from './MenuOption'
import { createActionOptions } from './values/createActionOptions'

interface CreateActionProps {}

export const CreateAction: React.FC<CreateActionProps> = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        className="items-center hidden p-1 md:flex group"
        onClick={() => setOpen(!open)}
      >
        <AiOutlinePlus className="text-xl text-white" />
        <MdOutlineExpandMore className="text-xl text-white" />
      </button>

      {/** Menu */}
      {open ? (
        <div className="absolute z-10 border-[0.1em] border-[#CFD8DE] hidden md:block bg-white right-10 top-10 w-[180px] shadow-xl rounded-md">
          {createActionOptions.map((Option) => (
            <MenuOption
              title={Option.title}
              href={Option.href}
              key={Option.title}
            />
          ))}
        </div>
      ) : (
        <></>
      )}

      {/** Click away listener */}
      {open ? (
        <div
          className="fixed top-0 left-0 z-0 w-full h-full"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <></>
      )}
    </div>
  )
}
