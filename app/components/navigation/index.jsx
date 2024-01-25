"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from './navbar'
import Sidebar from './sidebar'

export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbar />
      <Sidebar isOpen={ isOpen } toggle={ toggle}/>
    </div>
  )
}
