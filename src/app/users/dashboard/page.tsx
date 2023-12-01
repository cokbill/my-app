import React, { FC } from 'react'
import { getAuthSession } from '@/lib/auth-lib'
import Image from 'next/image'
import Link from 'next/link'
const page: FC = async() => {
    const user:any = await getAuthSession()
  return (
    <div className='w-full flex justify-center items-center flex-col mt-8'>
          <h3 className='text-2xl mb-2'>hello {user?.name}</h3>
      <div className='flex flex-col items-center overflow-hidden justify-center w-32 rounded-full'>
          <Image src={user?.image} width={100} height={100} alt={user?.name}/>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <Link href={'/users/dashboard/collection'} className='bg-red-700 text-white p-2 rounded-lg mt-4'>My Collection</Link>
        <Link href={'/users/dashboard/comments'} className='bg-red-700 text-white p-2 rounded-lg mt-4'>My Comments</Link>
      </div>
    </div>
  )
}

export default page