import Link from 'next/link'
import { SearchInput } from '../SearchInput'
import { CreateAction } from './CreateAction'
import { Logo } from './Logo'
import { MenuHandler } from './MenuHandler'
import { Notifications } from './Notifications'
import { UserProfile } from './UserProfile'
import { desktopHeaderOptions } from './values/desktopHeaderOptions'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-[#24292F] h-16">
      <nav className="flex items-center justify-between w-full h-full px-4 mx-auto max-w-screen-2xl">
        <MenuHandler />
        <div className="flex items-center gap-3">
          <Logo />
          <div className="w-[290px] h-[30px] hidden md:block">
            <SearchInput />
          </div>

          {/** Desktop options */}
          <div className="items-center hidden gap-1 md:flex">
            {desktopHeaderOptions.map((Option) => (
              <Link href={`/${Option.href}`} key={Option.title}>
                <a className="text-sm font-bold text-white xl:p-1 hover:text-gray-400">
                  {Option.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-1">
          <Notifications />
          <CreateAction />
          <UserProfile />
        </div>
      </nav>
    </header>
  )
}
