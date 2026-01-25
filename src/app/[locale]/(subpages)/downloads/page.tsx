import React from 'react'
import { Metadata } from 'next'
import Downloads from '@/components/Downloads/Downloads'
import Contact from '@/components/contact/contact'

type Props = {
    params: {
        locale: string
    }
}

export const metadata: Metadata = {
    title: "Download Center",
    description: "Download center, download brochures, user manuals and software files"
}
const DownloadsPage = ({ params } : Props) => {
    const {locale} = params
    
  return (  
    <>
        <Downloads l={locale} />
        <Contact l={locale}></Contact>
    </>
  )
}

export default DownloadsPage