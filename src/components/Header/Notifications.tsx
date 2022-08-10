import { IoNotificationsOutline } from 'react-icons/io5'

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = () => {
  return (
    <button role="button">
      <IoNotificationsOutline className="text-white text-xl" />
    </button>
  )
}
