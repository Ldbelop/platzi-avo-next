'use client'

import Link from "next/link"
import { useState } from 'react'
import Navbar from "../components/navbar"


const layout = () => {
  const handleChange = (event) => {
    setId(event.target.value)
  }

  const [id, setId] = useState("ZOINKS")
  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default layout