export const mobileDrawerOptions: {
  title: string
  href: string
  isLogOut?: boolean
  isUserProfile?: boolean
}[] = [
  {
    title: 'Dashboard',
    href: 'dashboard',
  },
  {
    title: 'Pull requests',
    href: '',
  },
  {
    title: 'Issues',
    href: '',
  },
  {
    title: 'Marketplace',
    href: '',
  },
  {
    title: 'Explore',
    href: '',
  },
  {
    title: 'Codespaces',
    href: '',
  },
  {
    title: 'Sponsors',
    href: '',
  },
  {
    title: 'Settings',
    href: '',
  },
  {
    title: '',
    href: '',
    isUserProfile: true,
  },
  {
    title: 'Sign out',
    href: '/api/auth/signout',
    isLogOut: true,
  },
]
