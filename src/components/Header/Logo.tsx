/* eslint-disable @next/next/no-img-element */
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { FaSpinner } from 'react-icons/fa'

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  const { resolvedTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])
  let src

  switch (resolvedTheme) {
    case 'light':
      src = '/images/logo.png'
      break
    case 'dark':
      src = '/dark.png'
      break
    default:
      src = '/images/logo.png'
      break
  }

  return (
    <>
      {loading ? (
        <>
          <FaSpinner className="text-white animate-spin text-3xl" />
        </>
      ) : (
        <img src={src} alt="GitHub" loading="lazy" className="h-8 w-8" />
      )}
    </>
  )
}
