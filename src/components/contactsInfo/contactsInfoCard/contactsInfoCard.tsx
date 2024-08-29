import React from 'react'
import styles from "./contacts-info-card.module.css"
const ContactsInfoCard = ({ 
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <div>{children}</div>
  )
}

export default ContactsInfoCard