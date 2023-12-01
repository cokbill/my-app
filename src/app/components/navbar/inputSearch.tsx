"use client"
import { useRouter } from 'next/navigation'
import React, { FC, useRef, ChangeEvent } from 'react'
import { CiSearch } from "react-icons/ci"

const InputSearch:FC = () => {
    const searchRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()

    const handleSearch = (e:any) => {
      const searchTerm = searchRef.current?.value;
      
      if (!searchTerm || searchTerm.trim() === "") return;
      // Access the current value of the input using the ref
      if (searchRef.current) {
        e.preventDefault();
        // Clear the input field
        if (searchTerm) {
          router.push(`/search/${searchTerm}`)
        }
        // Perform further actions with the search term
      }
    };

    const handleKeyDown = (e:any) => {
      if (e.key === 'Enter') {
        handleSearch(e)
      }
    }

  return (
    <div className='relative'>
        <input
          type="text"
          className="border rounded-lg py-1 px-7 w-full focus:outline-none focus:shadow-outline-blue gap-2"
          placeholder="Search Anime... "
          ref={searchRef}
          onKeyDown={handleKeyDown}
        />
        <button className="absolute top-1 right-2" onClick={handleSearch}><CiSearch size={25}/></button>

    </div>
  )
}

export default InputSearch