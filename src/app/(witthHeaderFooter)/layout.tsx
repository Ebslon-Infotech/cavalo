"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <FollowUs/> */}
      <Header />
      {children}
      <Footer />
    </>
  )
}

