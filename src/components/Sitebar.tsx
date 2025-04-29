import Link from 'next/link'
import React from 'react'

const Sitebar = () => {
  return (
    <div className='h-[100vh] bg-green-500 w-36 text-center pt-50'>
        <Link href={'/users'}>Users</Link>
    </div>
  )
}

export default Sitebar