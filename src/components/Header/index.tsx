import { SearchInput } from '../SearchInput'
import { CreateAction } from './CreateAction'
import { Logo } from './Logo'
import { MenuHandler } from './MenuHandler'
import { Notifications } from './Notifications'
import { UserProfile } from './UserProfile'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-[#24292F] h-16">
      <nav className="w-full h-full max-w-screen-2xl mx-auto px-4 flex items-center justify-between">
        <MenuHandler />
        <div className="flex items-center gap-3">
          <Logo />
          <div className="w-[300px] h-[30px] hidden md:block">
            <SearchInput />
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
