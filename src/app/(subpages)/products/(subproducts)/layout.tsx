import React from 'react'
import styles from "./layout.module.css"
  
export default function subProductsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className={styles.subProductsLayout}>
      <div className='container'>{children}</div>
    </div>
  )
}
