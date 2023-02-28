import React from "react";
import { NotificationContainer } from "./NotificationElements"

import './styles.css'

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