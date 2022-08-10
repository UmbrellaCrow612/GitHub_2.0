import Image from 'next/image'
import { useState } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'

import { FaSpinner } from 'react-icons/fa'
import { BiSmile } from 'react-icons/bi'
import Link from 'next/link'
import { MenuOption } from './MenuOption'
import { userProfileOptions } from './values/userProfileOption'

interface UserProfileProps {}

export const UserProfile: React.FC<UserProfileProps> = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleClick = () => {
    setOpen(!open)
    setLoading(false)
  }
  return (
    <>
      <div className="relative">
        <button
          className="items-center hidden p-1 md:flex"
          onClick={() => handleClick()}
        >
          <Image src="/images/logo.png" alt="username" width={25} height={25} />
          <MdOutlineExpandMore className="text-xl text-white" />
        </button>

        {/** Menu */}

        {open ? (
          <div className="absolute z-10 bg-white right-12 w-[200px] rounded-md shadow-xl border-[0.1em] border-[#CFD8DE] pb-2">
            <Link href="/">
              <a>
                <div className="w-full h-16 px-3 py-2 overflow-scroll border-b-[0.1em] border-[#CFD8DE]">
                  <h6 className="text-sm">Sign in as</h6>
                  <h6 className="text-base font-semibold">lorem10</h6>
                </div>
              </a>
            </Link>

            <div className="h-14 border-b-[0.1em] border-[#CFD8DE] flex items-center justify-center">
              <button className="flex items-center w-40 gap-2 px-3 py-2 text-sm text-gray-500 border-2 rounded-md shadow-sm hover:text-blue-600">
                <BiSmile className="text-xl" />
                Set status
              </button>
            </div>

            <ul>
              {userProfileOptions.map((Option) => (
                <li key={Option.title}>
                  <MenuOption
                    title={Option.title}
                    href={Option.href}
                    isBorderTop={Option.isBorderTop}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/** Click away listener */}
      {open ? (
        <div
          className="fixed top-0 left-0 z-0 w-full h-full"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <></>
      )}
    </>
  )
}
