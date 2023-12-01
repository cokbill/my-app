"use client"
import Image from 'next/image'
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'

const Notfound:FC = () => {
  const router = useRouter()
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
        <Image src="/asd.svg" width={1} height={1} alt="404" className='w-[100px]' />
        <h1 className='text-3xl font-base text-slate-500 tracking-wide mt-4'>404 | sorry..Page Not Found</h1>
        <button>
            <h2 className='text-3xl font-base text-white bg-slate-800 rounded-md px-3 py-2 tracking-wide mt-4' onClick={() => router.back()}>Back</h2>
        </button>
        </div>
    </div>
  )
}

export default Notfound