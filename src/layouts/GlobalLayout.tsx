import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MobileDrawer } from '../components/Header/MobileDrawer'

interface GlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MobileDrawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}
