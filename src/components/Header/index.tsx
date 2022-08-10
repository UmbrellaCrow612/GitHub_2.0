import { Logo } from './Logo'
import { MenuHandler } from './MenuHandler'
import { Notifications } from './Notifications'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-[#24292F] h-16">
      <nav className="w-full h-full max-w-screen-2xl mx-auto px-4 flex items-center justify-between">
        <MenuHandler />
        <Logo />
        <Notifications />
      </nav>
    </header>
  )
}
