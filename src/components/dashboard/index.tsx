import { Changes } from './Changes'
import { Feed } from './Feed'
import { Repositories } from './Repositories'

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <section className="flex mx-auto border max-w-screen-2xl">
      {/** Left */}
      <Repositories />
      {/** Middle */}
      <Feed />
      {/** Right */}
      <Changes />
    </section>
  )
}
