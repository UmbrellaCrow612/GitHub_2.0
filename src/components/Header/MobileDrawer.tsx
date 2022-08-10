import { useRecoilValue } from 'recoil'
import { mobileDrawerState } from '../../../atoms/mobileDrawerState'
import { SearchInput } from '../SearchInput'
import { DrawerOption } from './DrawerOption'
import { mobileDrawerOptions } from './values/mobileDrawerOptions'

interface MobileDrawerProps {}

export const MobileDrawer: React.FC<MobileDrawerProps> = () => {
  const openState = useRecoilValue(mobileDrawerState)
  return (
    <div
      className={`${openState ? 'md:hidden bg-[#24292F] pb-5 px-4' : 'hidden'}`}
    >
      <div className="w-full h-8 mb-4">
        <SearchInput />
      </div>

      {mobileDrawerOptions.map((Option) => (
        <>
          <DrawerOption
            title={Option.title}
            href={Option.href}
            key={Option.title}
            isLogOut={Option.isLogOut}
          />
        </>
      ))}
    </div>
  )
}
