import { IoNotificationsOutline } from 'react-icons/io5'

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = () => {
  return (
    <button role="button" className="p-1 flex items-center">
      <IoNotificationsOutline className="text-white text-xl" />
    </button>
  )
}
