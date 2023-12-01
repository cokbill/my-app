import Link from 'next/link'
import React, { FC } from 'react'
import InputSearch from './inputSearch'
import AuthButton from './authbutton'


const Navbar: FC = () => {
  return (
    <header>
      <div className='bg-red-700 flex justify-between py-2 px-3 md:flex-row flex-col'>
        <Link href='/'>
          <h1 className="text-2xl font-medium text-white text-center">Wibufandom</h1>
        </Link>
        <InputSearch />
        <AuthButton/>
      </div>
    </header>
  )
}

export default Navbar