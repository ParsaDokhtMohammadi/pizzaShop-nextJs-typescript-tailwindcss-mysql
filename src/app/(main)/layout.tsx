import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/index'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout