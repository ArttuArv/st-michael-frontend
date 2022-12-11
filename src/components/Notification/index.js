import { NotificationContainer } from "./NotificationElements"

const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }

  return (
    <NotificationContainer type = {notification.type} id='notification'>
      {notification.message}
    </NotificationContainer>
  )
}

export default Notification