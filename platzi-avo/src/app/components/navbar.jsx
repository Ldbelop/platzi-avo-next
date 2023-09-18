import React from 'react'
import Link from "next/link"


const Navbar = () => {
  return (
    <nav>
        <Link href="/" prefetch={false}>Home</Link>
        Canasta
    </nav>
    //la canasta será un compónente más tarde
  )
}

export default Navbar