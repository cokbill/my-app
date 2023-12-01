"use client"
import React, {FC, MouseEvent} from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';

type HeaderProps = {
    title: string
}

const Header:FC<HeaderProps> = ({title}) => {
  const router = useRouter()

const handleBack = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  router.back()
}

  return (
    <div className="flex justify-between items-center mx-2">
        <button className="text-2xl font-bold text-slate-700"><IoArrowBackOutline size={30} onClick={handleBack} /></button>
        <h3 className="text-2xl font-semibold text-slate-700">{title}</h3>
      </div>
  )
}

export default Header