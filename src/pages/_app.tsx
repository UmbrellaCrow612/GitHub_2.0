import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import { GlobalLayout } from '../layouts/GlobalLayout'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="system" attribute="class">
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
