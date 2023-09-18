'use client'

import Link from "next/link"
import { useState } from 'react'



const page = () => {
  const handleChange = (event) => {
    setId(event.target.value)
  }

  const [id, setId] = useState("ZOINKS")
  return (
    <>
      <div>page</div>
      <label htmlFor="">
        Escribe un id
        <input type="text" onChange={handleChange}/>
      </label>
      <div>{id}</div>
      <Link href={`/product/${id}`}>Ir al id {id}</Link>
    </>
  )
}

export default page